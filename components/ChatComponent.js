import React from 'react';
import { ChatInputComponent } from './ChatInputComponent';
import MessageBoxComponent from './MessageBoxComponent';

export const ChatComponent = () => {
    return (
        <div id="chat">
            <div className="wrapper">
                <div className="chat-transcript">
                    <div className="bot-column">
                        <MessageBoxComponent opacity={1} text={'Yes, sure thing! I am using all kinds of machines to help our lives become easier. Have you heard AI?'} />
                    </div>
                    <div className="user-column">
                        <MessageBoxComponent opacity={1} withShadow text={'Ahh, cool! Can you tell me more about it?'} />
                    </div>
                </div>
                <div className="input-row">
                    <ChatInputComponent />
                </div>
            </div>
        </div>
    )
}

export default ChatComponent;
