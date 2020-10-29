import React, { useState } from 'react';
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

    // binds
    this.submit = this.submit.bind(this);
  }

  submit() {
    const { text } = this.state;
    if (text !== '') {
      this.setState({ text: '' });
      return this.props?.submit({ text });
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
                placeholder="Type here to talk with me..."
                className="input"
                multiline
                rows={4}
                InputProps={{ disableUnderline: true }}
              />
            </FormControl>
          </div>
          <div className="btn-container">
            {!this.props?.disabled && (
              <Button className="done" onClick={this.submit}>
                Done
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
