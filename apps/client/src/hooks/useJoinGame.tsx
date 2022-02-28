import * as React from 'react';
import { useSocket, useSocketEvent } from 'socket.io-react-hook';
import { SOCKET_URL } from '../config';

export const useJoinGame = () => {
  const [joined, setJoined] = React.useState(false);
  const { socket, error } = useSocket(SOCKET_URL);
  const { sendMessage: joinGame } = useSocketEvent<{
    gameId: string;
  }>(socket, 'game:join');

  const handleJoinGame = React.useCallback(
    (gameId: string) => {
      joinGame(gameId);
      setJoined(true);
    },
    [joinGame]
  );

  return [handleJoinGame, joined, error];
};
