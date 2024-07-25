import React, { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { MessageList } from '../../../entities/messagelist';
import { useMessages } from '../../../features/message-form/hooks/useMessages';
import MessageForm from './../../../features/message-form/ui/MessageForm';


const MessagePage: React.FC = () => {
  const queryClient = useQueryClient();
  const { messages } = useMessages();

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3001');
    socket.onmessage = (event: MessageEvent<string>) => {
      queryClient.setQueryData(['messages'], JSON.parse(event.data));
    };
    return () => socket.close();
  }, [queryClient]);

  return (
    <div className='container'>
      <div className='content_form'>
        <MessageList messages={messages} />
        <MessageForm />
      </div>
    </div>
  );
};

export default MessagePage;
