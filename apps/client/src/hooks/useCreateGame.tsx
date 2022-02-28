import * as React from 'react';
import { useSocket, useSocketEvent } from 'socket.io-react-hook';
import { SOCKET_URL } from '../config';

export const useCreateGame = () => {
  const { socket, error } = useSocket(SOCKET_URL);
  const { sendMessage: createRoom } = useSocketEvent(socket, 'game:create');
  const { lastMessage } = useSocketEvent(socket, 'game:created');

  const handleCreateGame = React.useCallback(() => {
    createRoom((error: string) => {
      console.error(error);
    });
  }, [createRoom]);

  return [handleCreateGame, lastMessage, error];
};
