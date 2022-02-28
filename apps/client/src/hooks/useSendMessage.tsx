import * as React from 'react';
import { useSocket, useSocketEvent } from 'socket.io-react-hook';
import { SOCKET_URL } from '../config';

export const useSendMessage = () => {
  const { socket, error } = useSocket(SOCKET_URL);
  const { sendMessage } = useSocketEvent<{
    id: string;
    user: {
      id: string;
      name: string;
    };
    value: string;
    time: number;
  }>(socket, 'chat:message');

  const handleSend = React.useCallback(
    (message) => {
      sendMessage(message);
    },
    [sendMessage]
  );

  return [handleSend, error];
};
