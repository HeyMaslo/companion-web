import { observable } from 'mobx';
import { getCharacters, getNext, getSuggestion, getToxicity } from '../api/storyMapr';
import {
  MASLO_BOT_NAME,
  USER_CHARACTER_NAME,
  INITIAL_NODE_ID,
  CATEGORY_API_BASE,
} from '../consts';
import qs from 'qs';

// TODO logger
export var messageFromBot = '';
export class ChatViewModel {
  masloBotName = MASLO_BOT_NAME;
  userCharacterName = USER_CHARACTER_NAME;
  currentNodeId = INITIAL_NODE_ID;
  wordMappings = import('../wordMaps.json');
  do_toxic_check = true;

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

  @observable showInformationModule = false;
  @observable moduleName = null;
  @observable submoduleSelected = null;

  @observable dtreeId = process.env.DTR_ID

  constructor() {}

  /**
   * chat entrypoint
   */
  async start() {

    const dtreeParam = qs.parse(window.location.search, {ignoreQueryPrefix: true})
    if (dtreeParam.dtreeId) {
      this.dtreeId = dtreeParam.dtreeId
    } 

    try {
      const chars = await getCharacters(this.dtreeId);

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
    this._pushMessage(message, 'user');
    this.showInformationModule = false;
    this.moduleName = null;
    this.submoduleSelected = null;
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
    this._pushMessage(user_node.en_content, 'user');

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

    const nextNodes = await getNext(this.dtreeId, this.currentNodeId, this.context);
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
      this._pushMessage(nextNode.content.en, 'bot');
		

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

    // this.gpt3Cache[-1].en_content is the user's last entry
    if (this.do_toxic_check == true) {
      const toxic_check = await getToxicity(this.dtreeId, this.currentNodeId, this.gpt3Cache[this.gpt3Cache.length - 1].en_content)

      if (toxic_check.verdict == 2) {
        // throw away the offending node and retry
        this.gpt3Cache.pop()
        this._pushMessage("Hey that wasn't very nice...want to try that again?", 'bot');
        this.chatStates.typing = false;
        return
      }
    }
    
    const suggestions = await getSuggestion(this.dtreeId, this.currentNodeId, this.gpt3Cache);

    let final_suggestion = null;
    
    if (this.do_toxic_check == true) {
      final_suggestion = await this._suggestions_toxic_check(this.dtreeId, this.currentNodeId, suggestions)
    } else {
      final_suggestion = suggestions[0]
    }

    if (final_suggestion == null) {
      final_suggestion = {en_content: "Sorry..I'm still learning and sometimes get confused.  Want to try saying that differently?"}
    }

    const masloNode = {
      speaker_ids: [this.masloBotCharacter.smid],
      listener_ids: [this.userCharacter.smid],
      en_content: final_suggestion.en_content,
    };

    this.gpt3Cache.push(masloNode);

    this.gpt3Counter += 1;

    // NK **** This could eventually be stored in the gpt3Cache or context.  Calling direct animations here for now.
    const anim = await this._getAnimFromContent(masloNode.en_content);

    console.log('anim determined for GPT3 -> ', anim);
    this.persona._persona._persona.setState(anim);

    this._pushMessage(masloNode.en_content, 'bot');
	messageFromBot = masloNode.en_content;
    this.chatStates.typing = false;
  }

  /**
   * Fetch a anim given a string (usually a GPT3 response content)
   */
  async _getAnimFromContent(content) {
    const encodedContent = encodeURIComponent(content);
    // If the rejected items get long this will suck
    let possible_anims = Object.keys(
      this.persona._persona._persona._states
    ).filter((item) => item != 'init');
    const extras = {
      happy: 'joy',
      nervous: 'shake',
      unknown: 'idle',
      neutral: 'idle',
      bored: 'idle',
    };
    Object.keys(extras).forEach((extra) => possible_anims.push(extra));
    const categoryUrl =
      CATEGORY_API_BASE +
      `/search?prompt=${encodedContent}&tokens=100&engine=davinci&docs=${possible_anims.join(
        ','
      )}`;
    const response = await fetch(categoryUrl);
    const data = await response.json();
    const mapping = extras[data.response];
    if (mapping) {
      return mapping;
    } else {
      return data.response;
    }
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
    if (moduleName) {
      this.showInformationModule = true;
      this.moduleName = moduleName;
    }
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
   * toxicity checks responses
   * @param {string} suggestions
   */
  async _suggestions_toxic_check(dtreeId, nodeId, suggestions) {
    let retval = null;
    for (var i = 0; i < suggestions.length; i++) {
      const toxic_check = await getToxicity(dtreeId, nodeId, suggestions[i].en_content)
      if ((toxic_check.verdict == 0) || (toxic_check.verdict == 1)) {
        retval = suggestions[i];
        break;
      }
    }
    return retval
    

   }

  /**
   * push a new answer from user with a new css class to define the box opacity
   * @param {string} message
   */
  _pushMessage(message, author) {
    this.chatStates.userMessages.push({
      message: message,
      opacity: '',
      from: author,
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
