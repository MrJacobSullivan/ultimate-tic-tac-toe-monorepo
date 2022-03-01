import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useJoinGame } from '../hooks/useJoinGame';
import GameContainer from '../components/Game/GameContainer';

const Room = () => {
  const { gameId } = useParams();
  const [joinGame, error] = useJoinGame();

  React.useEffect(() => {
    if (gameId) joinGame(gameId);
  }, [gameId, joinGame]);

  return (
    <div>
      <GameContainer />
    </div>
  );
};

export default Room;
