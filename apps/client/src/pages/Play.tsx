import * as React from 'react';
import GameContainer from '../components/Game/GameContainer';
import { useWebSocket } from '../hooks/useWebSocket';

const Play = () => {
  const { createSocket, socket } = useWebSocket();

  React.useEffect(() => {
    if (!socket?.active) createSocket();
  }, [createSocket, socket?.active]);

  return <GameContainer />;
};

export default Play;
