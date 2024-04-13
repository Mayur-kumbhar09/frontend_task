// ChatWindow.js
import React from 'react';
import { Paper, Typography } from '@mui/material';

function ChatWindow({ messages }) {
    return (
        <Paper style={{ padding: 20, margin: '20px 0', minHeight:480  }}>
            <Typography variant="h6">Chat Window</Typography>
            <div>
                {messages && messages.map((message, index) => (
                    <div key={index}>
                        <Typography>{message}</Typography>
                    </div>
                ))}
            </div>
        </Paper>
    );
}

export default ChatWindow;
