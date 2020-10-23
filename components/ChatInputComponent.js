import React, { useState } from 'react';
import { Button, FormControl, TextField } from '@material-ui/core';
import { EditIcon } from '../config/images';

export const ChatInputComponent = () => {
    const [text, setText] = useState('');
    return (
        <div id="chat-input">
            <div className="text-field-container">
                <div className="input">
                    <FormControl fullWidth>
                        <TextField
                            name="username"
                            type="text"
                            fullWidth
                            value={text}
                            onChange={(value) => setText(value.target.value)}
                            placeholder="Type here to talk with me..."
                            className="input"
                            multiline
                            rows={4}
                            InputProps={{ disableUnderline: true }}
                        />
                    </FormControl>
                </div>
                <div className="btn-container">
                    <Button className="edit">
                        <img src={EditIcon} />
                    </Button>
                    <Button className="done">Done</Button>
                </div>
            </div>
            <div className="information-tip">
                <p>max 140 characters</p>
            </div>
        </div>
    );
}