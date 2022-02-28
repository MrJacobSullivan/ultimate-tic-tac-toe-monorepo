import * as React from 'react';
import { useSocket, useSocketEvent } from 'socket.io-react-hook';
import { SOCKET_URL } from '../config';

export const useOpenGames = () => {
  const { socket, error } = useSocket(SOCKET_URL);
  const { lastMessage } = useSocketEvent<string[]>(socket, 'game:open-games');
  const [openGames, setOpenGames] = React.useState<string[]>([]);

  React.useEffect(() => {
    setOpenGames(lastMessage);
  }, [lastMessage]);

  return openGames;
};
