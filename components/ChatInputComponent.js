import React, { useState, createRef } from 'react';
import { Button, FormControl, TextField } from '@material-ui/core';
import { EditIcon } from '../config/images';
import { observer } from 'mobx-react';

@observer
export default class ChatInputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };

    this.textFieldRef = React.createRef();

    // binds
    this.submit = this.submit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  submit() {
    const { text } = this.state;
    if (text !== '') {
      this.setState({ text: '' });
      return this.props?.submit({ text });
    }
  }

  handleKeyDown(e) {
    if (e.keyCode == 13 && e.shiftKey) {
      this.submit();
    }
  }


  componentDidUpdate(prevProps, prevState) {
    if (!this.props?.disabled) { 
      this.textFieldRef.current.focus();
    }
  }

  render() {
    return (
      <div
        id="chat-input"
        className={this.props?.disabled ? `disabled` : `enabled`}>
        <div className="text-field-container">
          <div className="input">
            <FormControl fullWidth>
              <TextField
                name="username"
                type="text"
                disabled={this.props?.disabled}
                fullWidth
                value={this.state.text}
                onChange={(value) =>
                  this.setState({ text: value.target.value })
                }
                onKeyDown={this.handleKeyDown}
                placeholder="Type here to talk with me..."
                className="input"
                multiline
                InputProps={{ disableUnderline: true }}
                inputRef={this.textFieldRef}
              />
            </FormControl>
          </div>
          <div className="btn-container">
            {!this.props?.disabled && (
              <Button className="done" onClick={this.submit}>
                Send
              </Button>
            )}
          </div>
        </div>
        <div className="information-tip">
          <p>max 140 characters</p>
        </div>
      </div>
    );
  }
}
