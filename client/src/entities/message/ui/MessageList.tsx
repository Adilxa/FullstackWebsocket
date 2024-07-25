import React from 'react';

interface MessageProps {
    messages: string[];
}

const MessageList: React.FC<MessageProps> = ({ messages }) => {
    return (
        <ul>
            {messages.map((msg, index) => (
                <li key={index} style={{ color: "black" }}>{msg}</li>
            ))}
        </ul>
    );
};

export default MessageList;
