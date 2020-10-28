import { autorun, observable } from 'mobx';
import { getCharacters, getNext, getSuggestion } from '../api/storyMapr';
import {
  MASLO_BOT_NAME,
  USER_CHARACTER_NAME,
  INITIAL_NODE_ID,
} from '../consts';

// TODO logger

export class ChatViewModel {
  @observable masloBotName = MASLO_BOT_NAME;
  @observable userCharacterName = USER_CHARACTER_NAME;
  @observable currentNodeId = INITIAL_NODE_ID;
  @observable masloBotCharacter = null;
  @observable userCharacter = null;
  @observable chatCount = 0;
  @observable context = {};
  @observable gpt3Mode = false;
  @observable gpt3Counter = 0;
  @observable gpt3Max = 3;
  @observable gpt3Cache = [];
  @observable chatStates = {
    typing: true,
    botMessages: [],
    userMessages: [],
  };

  @observable wordMappings = import('../wordMaps.json');

  constructor() {}

  // initialize chat
  async start() {
    try {
      const chars = await getCharacters();

      this.masloBotCharacter = chars.find(
        (char) => char.name == this.masloBotName
      );
      this.userCharacter = chars.find(
        (char) => char.name == this.userCharacterName
      );

      // clean of properties to ints
      Object.entries(this.userCharacter.properties).forEach(([key, value]) => {
        this.userCharacter.properties[key] = parseInt(value);
      });

      await this._chatLoop();
    } catch (e) {
      console.log(`error -- Could not start Chat due to: ${e}`);
    }
  }

  // get users input
  async userInput(message) {
    this.gpt3Mode = true;
    this._scoreUserInput(message);

    const user_node = {
      speaker_ids: [this.userCharacter.smid],
      listener_ids: [this.masloBotCharacter.smid],
      en_content: message,
    };

    this.gpt3Cache.push(user_node);

    // user response
    this._pushUserMessage(user_node.en_content);

    await this._chatLoop();
  }

  /**
   * private
   */
  _updateContext() {
    Object.keys(this.userCharacter.properties).forEach((key) => {
      const contextKey = `Character:${this.userCharacter.smid}.${key}`;
      this.context[contextKey] = this.userCharacter.properties[key];
    });
  }

  // exec this to get bot response
  async _chatLoop() {
    let pauseLoop = false;
    this.chatStates.typing = true;
    this._updateContext();

    // gpt3 chat
    if (this.gpt3Mode == true && (this.gpt3Counter < this.gpt3Max)) {
      return await this._gpt3_chat();
    }

    this.gpt3Mode = false;
    this.gpt3Counter = 0;

    const nextNodes = await getNext(this.currentNodeId, this.context);

    console.log('nextNodes', nextNode);

    const nextNode = nextNodes[Math.floor(Math.random() * nextNodes.length)];

    const mySpeaker = nextNode.speaker_ids[0];
    if (mySpeaker === this.masloBotCharacter.smid) {
      if (nextNode.actions.length > 0) {
        nextNode.actions.forEach((action) =>
          this._execExternalFunc(action.body)
        );
      }

      this.currentNodeId = nextNode.smid;

      // bot response
      this._pushBotMessage(nextNode.content.en);

      this.chatStates.typing = false;
      pauseLoop = true;

      if (this.gpt3Mode === true) {
        console.log('passei aqui');
        // TODO
      }
    } else {
      const reactions = nextNodes.map((node) => {
        if (node.speaker_ids[0] != this.masloBotCharacter.smid) {
          return { text: node.content.en, value: node.smid };
        }
      });

      pauseLoop = true;
      this.chatStates.typing = false;
    }

    if (!pauseLoop) {
      this.chatStates.typing = true;
      setTimeout(async () => {
        await this._chatLoop();
      }, 3000);
    }
  }

  // exec this to get bot response with gpt3
  async _gpt3_chat() {
    this.chatStates.typing = true;

    const suggestion = await getSuggestion(this.currentNodeId, this.gpt3Cache);

    const masloNode = {
      speaker_ids: [this.masloBotCharacter.smid],
      listener_ids: [this.userCharacter.smid],
      en_content: suggestion[0].en_content,
    };

    this.gpt3Cache.push(masloNode);

    this.gpt3Counter += 1;

    this._pushBotMessage(masloNode.en_content);

    this.chatStates.typing = false;
  }

  _execExternalFunc(func_string) {
    const [actor, method, args] = func_string
      .split(',')
      .map((actionItem) => actionItem.trim());

    // NK **** This should be a switch, but JS switches suck
    if (actor == 'persona') {
      try {
        this.masloPersona._persona[method](args);
      } catch (e) {
        console.log(`error -- could not exec ${method} on persona: ${e}`);
      }
    }

    // NK *** we probably want some protection here...maybe wrap in object
    if (actor == 'bot') {
      try {
        this[method](args);
      } catch (e) {
        console.log(`error -- Cerror -- could not exec ${method} on bot: ${e}`);
      }
    }
  }

  _scoreUserInput(input) {
    Object.keys(this.wordMappings).forEach(key => {
      if (this.userCharacter.properties[key] === undefined) {
        console.log(`Skipping ${key} since not in Storymapr character!`)
        return;
      }
      this.wordMappings[key].forEach(keyword => {
        const matcher = new RegExp(keyword)
        if (matcher.test(input)) {
          console.log("Found!", matcher)
          this.userCharacter.properties[key] += 1
        }
      })
    })
  }

  _pushUserMessage(message) {
    this.chatStates.userMessages.push({
      message: message,
      opacity: '',
    });
    this.chatStates.userMessages.forEach((data, i) => {
      this.chatStates.userMessages[i].opacity = `opacity_${(this.chatStates.userMessages.length - 1) - i}`;
    }); 
  }

  _pushBotMessage(message) {
    this.chatStates.botMessages.push({
      message: message,
      opacity: '',
    });
    this.chatStates.botMessages.forEach((data, i) => {
      this.chatStates.botMessages[i].opacity = `opacity_${(this.chatStates.botMessages.length - 1) - i}`;
    }); 
  }
}

const instance = new ChatViewModel();

autorun(() => {
  console.log('chatStates', instance.chatStates.botMessages);
});

export default instance;
