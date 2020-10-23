import { getCharacters, getNext, getSuggestion } from "../api/storyMapr";
import { MASLO_BOT_NAME, USER_CHARACTER_NAME, INITIAL_NODE_ID } from "../consts";

// TODO logger

export default class ChatViewModel {

    constructor() {
        this.masloBotName = MASLO_BOT_NAME;
        this.userCharacterName = USER_CHARACTER_NAME;
        this.currentNodeId = INITIAL_NODE_ID;
        this.masloBotCharacter = null;
        this.userCharacter = null;
        this.chatCount = 0;
        this.context = {};
        this.gpt3Mode = false;
        this.gpt3Counter = 0;
        this.gpt3Max = 0;
        this.gpt3Cache = [];

        this.chatStates = {
            typing: false,
            botMessages: [],
            userMessages: [],
        }
    }

    async start() {

        try {
            const chars = await getCharacters();

            this.masloBotCharacter = chars.find(char => char.name == this.masloBotName);
            this.userCharacter = chars.find(char => char.name == this.userCharacterName);

            // clean of properties to ints
            Object.entries(this.userCharacter.properties).forEach(([key, value]) => {
                this.userCharacter.properties[key] = parseInt(value);
            });

            await this._chatLoop();
        } catch (e) {
            console.log(`error -- Could not start Chat due to: ${e}`);
        }
    }

    /**
     * private
     */
    _updateContext() {
        Object.keys(this.userCharacter.properties).forEach(key => {
            const contextKey = `Character:${this.userCharacter.smid}.${key}`
            this.context[contextKey] = this.userCharacter.properties[key]
        });
    }

    async _chatLoop() {
        this._updateContext();

        // gpt3 chat
        if (this.gpt3Mode == true && (this.gpt3Counter < this.gpt3Max)) {
            return await this._gpt3_chat();
        }

        this.gpt3Mode = false;
        this.gpt3Counter = 0;

        const nextNodes = await getNext(this.currentNodeId, this.context);
        const nextNode = nextNodes[Math.floor(Math.random() * nextNodes.length)];

        const mySpeaker = nextNode.speaker_ids[0];
        if (mySpeaker === this.masloBotCharacter.smid) {
            if (nextNode.actions.length > 0) {
                nextNode.actions.forEach(action => this._execExternalFunc(action.body));
            }

            this.currentNodeId = nextNode.smid;
        }

        console.log(nextNode);
        console.log(mySpeaker);
        console.log(this.currentNodeId);
    }

    async _gpt3_chat() {
        this.chatStates.typing = true;

        const suggestion = await getSuggestion(this.currentNodeId, this.gpt3Cache);

        const masloNode = {
            speaker_ids: [this.masloBotCharacter.smid],
            listener_ids: [this.userCharacter.smid],
            en_content: suggestion.data[0].en_content,
        }

        this.gpt3Cache.push(masloNode);
        this.chatStates.botMessages.push(masloNode.en_content);
        
        this.chatStates.typing = false;
    }

    _execExternalFunc(func_string) {
    
        const [actor, method, args] = func_string.split(',').map(actionItem => actionItem.trim() )
    
    
        // NK **** This should be a switch, but JS switches suck
        if (actor == 'persona') {
          try {
            this.masloPersona._persona[method](args)
          } catch (e) {
            console.log(`error -- could not exec ${method} on persona: ${e}`)
          }
        }
    
        // NK *** we probably want some protection here...maybe wrap in object
        if (actor == 'bot') {
          try {
            this[method](args)
          } catch (e) {
            console.log(`error -- Cerror -- could not exec ${method} on bot: ${e}`)
          }
        }
    
    
    
        
      }
}