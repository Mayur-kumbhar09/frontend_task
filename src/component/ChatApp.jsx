// ChatApp.js
import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import MessageInput from './MessageInput';
import {Typography} from "@mui/material"

function ChatApp() {
    const [messages, setMessages] = useState([]);

    const addMessage = (newMessage) => {
        setMessages([...messages, newMessage]);
    };

    return (
        <div>
            <Typography>Chat App</Typography>
            <ChatWindow messages={messages} />
            <MessageInput addMessage={addMessage} />
        </div>
    );
}

export default ChatApp;

