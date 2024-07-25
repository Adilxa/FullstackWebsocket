import React, { useState, FormEvent } from 'react';
import { useMessages } from '../hooks/useMessages';
import styles from './MessageForm.module.scss';

const MessageForm: React.FC = () => {
    const { mutation } = useMessages();
    const [newMessage, setNewMessage] = useState<string>('');
    const [hasError, setHasError] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newMessage.trim()) {
            mutation.mutate(newMessage);
            setNewMessage('');
            setHasError(false);
        } else {
            setHasError(true);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => { setNewMessage(e.target.value); setHasError(false) }}
                className={`${styles.input} ${hasError ? styles.inputError : ''}`}
                placeholder='Enter Message'
            />
            <button type="submit" className={styles.button}>Send</button>
        </form>
    );
};

export default MessageForm;
