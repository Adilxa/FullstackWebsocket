import React, { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { MessageList } from '../../../entities/message';
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
    <div>
      <h1>Messages</h1>
      <MessageList messages={messages} />
      <MessageForm />
    </div>
  );
};

export default MessagePage;
