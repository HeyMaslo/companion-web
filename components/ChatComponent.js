import { observer } from 'mobx-react';
import React from 'react';
import ChatViewModel from '../viewModels/ChatViewModel';
import ChatInputComponent from './ChatInputComponent';
import MessageBoxComponent from './MessageBoxComponent';
import TypingLoadingComponent from './TypingLoadingComponent';

@observer
export default class ChatComponent extends React.Component {
  constructor(props) {
    super(props);
    this.model = ChatViewModel;
    this.props = props;
    this.submit = this.submit.bind(this);
  }
  async submit({ text }) {
    await this.model.userInput(text);
  }

  render() {
    return (
      <div id="chat">
        <div className="wrapper">
          <div className="chat-transcript">
            <div className="bot-column">
              {this.model.chatStates.botMessages.map(({ message, opacity }, i) => {
                return <MessageBoxComponent opacity={opacity} text={message} />;
              })}
              {this.model.chatStates.typing && <TypingLoadingComponent />}
            </div>
            <div className="user-column">
              {this.model.chatStates.userMessages.map(({ message, opacity }, i) => {
                return (
                  <MessageBoxComponent opacity={opacity} text={message} withShadow />
                );
              })}
            </div>
          </div>
          <div className="input-row">
            <ChatInputComponent
              disabled={this.model.chatStates.typing}
              submit={this.submit}
            />
          </div>
        </div>
      </div>
    );
  }
}
