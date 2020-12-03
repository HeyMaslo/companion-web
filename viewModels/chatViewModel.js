import { observable } from 'mobx';
import { getCharacters, getNext, getSuggestion } from '../api/storyMapr';
import {
  MASLO_BOT_NAME,
  USER_CHARACTER_NAME,
  INITIAL_NODE_ID,
  CATEGORY_API_BASE
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
    this._pushMessage(message,'user');
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
    this._pushMessage(user_node.en_content,'user');

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
      this._pushMessage(nextNode.content.en,'bot');

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
      }, 1000);
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

    // NK **** This could eventually be stored in the gpt3Cache or context.  Calling direct animations here for now.
    const anim = await this._getAnimFromContent(masloNode.en_content)
    
    console.log("anim determined for GPT3 -> ", anim)
    this.persona._persona._persona.setState(anim)

    this._pushMessage(masloNode.en_content,'bot');

    this.chatStates.typing = false;
  }

  /**
   * Fetch a anim given a string (usually a GPT3 response content)
  */
  async _getAnimFromContent(content) {
    const encodedContent = encodeURIComponent(content)
    // If the rejected items get long this will suck
    let possible_anims = Object.keys(this.persona._persona._persona._states).filter(item => item != 'init')
    const extras = {'happy': 'joy', 'nervous': 'shake', 'unknown': 'idle', 'neutral': 'idle', 'bored':'idle'}
    Object.keys(extras).forEach(extra => possible_anims.push(extra))
    const categoryUrl = CATEGORY_API_BASE + `/search?prompt=${encodedContent}&tokens=100&engine=davinci&docs=${possible_anims.join(',')}`
    const response = await fetch(categoryUrl)
    const data = await response.json()
    const mapping = extras[data.response]
    if (mapping) {return mapping} 
      else 
    {return data.response}
    
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

  showInfoModule(moduleName) {
    alert(`I would show: ${moduleName}`)
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
  _pushMessage(message, author) {
    this.chatStates.userMessages.push({
      message: message,
      opacity: '',
	  from:author
    });

    this.chatStates.userMessages.forEach((_, i) => {
      //this.chatStates.userMessages[i].opacity = `opacity_${
      //  this.chatStates.userMessages.length - 1 - i
      //}`;
    });
  }

}

const instance = new ChatViewModel();

export default instance;
