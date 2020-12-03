import { observer } from 'mobx-react';
import React from 'react';
import TypingLoadingComponent from './TypingLoadingComponent';

@observer
export default class MessageBoxComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        id={`message-box`}
        className={`
		${this.props.withShadow ? 'shadow' : ''} 
		${this.props?.opacity} 
		${this.props?.author}
		`}>
        <p>{this.props.text}</p>
      </div>
    );
  }
}
