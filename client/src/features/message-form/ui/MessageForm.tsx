import React, { useState, FormEvent } from 'react';
import { useMessages } from '../hooks/useMessages';

const MessageForm: React.FC = () => {
    const { mutation } = useMessages();
    const [newMessage, setNewMessage] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newMessage.trim()) {
            mutation.mutate(newMessage);
            setNewMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default MessageForm;
