import React from 'react';
import { Message } from '../model';
import MessageItem from '../../../features/message/ui';
import NoDataHave from '../../../shared/ui/nodatahave';

interface MessageProps {
    messages: (string | Message)[];
}

const MessageList: React.FC<MessageProps> = ({ messages }) => {
    return (
        <section >
            {
                messages.length ? <section>
                    {messages.map((msg, index) => (
                        <MessageItem key={`${index}_${msg}`} message={typeof msg === 'string' ? msg : msg.message} itemIndex={index} />
                    ))}
                </section>
                    :
                    <NoDataHave />
            }
        </section>
    );
};

export default MessageList;
