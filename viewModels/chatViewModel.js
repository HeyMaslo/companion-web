import { observable } from 'mobx';
import { getCharacters, getNext, getSuggestion } from '../api/storyMapr';
import {
  MASLO_BOT_NAME,
  USER_CHARACTER_NAME,
  INITIAL_NODE_ID,
} from '../consts';
import personaViewModel from './PersonaViewModel';

// TODO logger

export class ChatViewModel {

  masloBotName = MASLO_BOT_NAME;
  userCharacterName = USER_CHARACTER_NAME;
  currentNodeId = INITIAL_NODE_ID;
  wordMappings = import('../wordMaps.json');

  @observable persona = null;

  @observable masloBotCharacter = null;
  @observable userCharacter = null;
  @observable chatCount = 0;
  @observable context = {};
  @observable gpt3Mode = false;
  @observable gpt3Counter = 0;
  @observable gpt3Max = 0;
  @observable gpt3Cache = [];
  @observable chatStates = {
    typing: true,
    botMessages: [],
    userMessages: [],
  };
  @observable chatCount = 0;
  @observable renderButtons = false;
  @observable buttons = [];
  @observable pauseLoop = false;

  constructor() {}

  /**
   * chat entrypoint
   */
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

      this.gpt3Mode = true;
      await this._chatLoop();
    } catch (e) {
      console.log(`error -- could not start chat due to: ${e}`);
    }
  }

  /**
   * process the user's choice
   * @param {string} value 
   */
  async userReactionButtons(value, message) {
    this.currentNodeId = value;
    this._pushUserMessage(message);
    await this._chatLoop();
  }

  /**
   * process user's input
   * @param {string} message
   */
  async userInput(message) {

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
   * Private mathods
   */

  /**
   * updating the chat context
   */
  _updateContext() {
    Object.keys(this.userCharacter.properties).forEach((key) => {
      const contextKey = `Character:${this.userCharacter.smid}.${key}`;
      this.context[contextKey] = this.userCharacter.properties[key];
    });
  }

  /**
   * responsible to interact with Story Mapr and control the chat flow
   */
  async _chatLoop() {

    this.renderButtons = false;
    this.buttons = [];

    this.chatCount += 1;
    this.pauseLoop = false;

    this.chatStates.typing = true;
    this._updateContext();

    // gpt3 chat (free talk with maslo)
    if (this.gpt3Mode == true && this.gpt3Counter < this.gpt3Max) {
      return await this._gpt3_chat();
    }

    this.gpt3Mode = false;
    this.gpt3Counter = 0;

    const nextNodes = await getNext(this.currentNodeId, this.context);
    const nextNode = nextNodes[Math.floor(Math.random() * nextNodes.length)];

    const mySpeaker = nextNode.speaker_ids[0];

    // verify if maslo is talking
    if (mySpeaker === this.masloBotCharacter.smid) {

      if (nextNode.actions.length > 0) {
        nextNode.actions.forEach((action) =>
          this._execExternalFunc(action.body)
        );
      }

      this.currentNodeId = nextNode.smid;

      // maslo response
      this._pushBotMessage(nextNode.content.en);

      this.chatStates.typing = false;
    }

    // verify if needs some user interaction
    if (mySpeaker === this.userCharacter.smid) {
      // rendering buttons
      const reactions = nextNodes.map((node) => {
        if (node.speaker_ids[0] != this.masloBotCharacter.smid) {
          return { text: node.content.en, value: node.smid };
        }
      });

      this.renderButtons = true;
      this.buttons = reactions;

      this.pauseLoop = true;
      this.chatStates.typing = false;
    }

    if (!this.pauseLoop) {
      this.chatStates.typing = true;
      this.gpt3Mode = false;

      // adding some delay to give the 'typing' experience
      setTimeout(async () => {
        await this._chatLoop();
      }, 3000);
    }
  }

  /**
   * talk with Maslo with gpt3
   */
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

  /**
   * interact with the orb
   * @param {string} func_string
   */
  _execExternalFunc(func_string) {
    const [actor, method, args] = func_string
      .split(',')
      .map((actionItem) => actionItem.trim());

    if (actor === 'persona') {
      try {
        this.persona._persona._persona[method](args);
      } catch (e) {
        console.log(`error -- could not exec ${method} on persona: ${e}`);
      }
    }

    if (actor === 'bot') {
      try {
        this[method](args);
      } catch (e) {
        console.log(`error -- Cerror -- could not exec ${method} on bot: ${e}`);
      }
    }
  }

  startGpt3(maxCount) {
    this.gpt3Mode = true;
    this.gpt3Max = maxCount;
    this.pauseLoop = true;
  }

  /**
   * scores user's input
   * @param {string} input
   */
  _scoreUserInput(input) {
    Object.keys(this.wordMappings).forEach((key) => {
      if (this.userCharacter.properties[key] === undefined) {
        console.log(`skipping ${key} since not in Storymapr character!`);
        return;
      }
      this.wordMappings[key].forEach((keyword) => {
        const matcher = new RegExp(keyword);
        if (matcher.test(input)) {
          this.userCharacter.properties[key] += 1;
        }
      });
    });
  }

  /**
   * push a new answer from user with a new css class to define the box opacity
   * @param {string} message
   */
  _pushUserMessage(message) {
    this.chatStates.userMessages.push({
      message: message,
      opacity: '',
    });
    this.chatStates.userMessages.forEach((_, i) => {
      this.chatStates.userMessages[i].opacity = `opacity_${
        this.chatStates.userMessages.length - 1 - i
      }`;
    });
  }

  /**
   * push a new answer from bot with a new css class to define the box opacity
   * @param {string} message
   */
  _pushBotMessage(message) {
    this.chatStates.botMessages.push({
      message: message,
      opacity: '',
    });
    this.chatStates.botMessages.forEach((_, i) => {
      this.chatStates.botMessages[i].opacity = `opacity_${
        this.chatStates.botMessages.length - 1 - i
      }`;
    });
  }
}

const instance = new ChatViewModel();

export default instance;
