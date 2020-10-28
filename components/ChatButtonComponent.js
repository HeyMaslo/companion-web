import { Button } from '@material-ui/core';
import { observer } from 'mobx-react';
import React from 'react';

@observer
export default class ChatButtonComponent extends React.Component {
  render() {
    return (
      <Button
        id="chat-button"
        onClick={() => this.props.submit(this.props.value)}>
        {this.props.text}
      </Button>
    );
  }
}
