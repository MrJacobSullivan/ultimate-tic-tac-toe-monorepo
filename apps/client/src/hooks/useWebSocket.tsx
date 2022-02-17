import * as React from 'react';
import { io } from 'socket.io-client';
import { ApplicationContext } from '../contexts/ApplicationContext';
import { SOCKET_URL } from '../config';

export const useWebSocket = () => {
  const { socket, setSocket } = React.useContext(ApplicationContext);

  const createSocket = React.useCallback(() => {
    const newSocket = io(SOCKET_URL);
    setSocket(newSocket);
  }, [setSocket]);

  return { createSocket, socket };
};
