import React from 'react';

export const MessageBoxComponent = ({ opacity, text, withShadow = false }) => {
    return (
        <div id={`message-box`} className={`${withShadow ? 'shadow' : ''}`}>
            <p>{text}</p>
        </div>
    );
}

export default MessageBoxComponent;
