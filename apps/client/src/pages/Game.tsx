import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useJoinGame } from '../hooks/useJoinGame';
import GameContainer from '../components/Game/GameContainer';

const Room = () => {
  const { gameId } = useParams();
  const [joinGame, joined, error] = useJoinGame();

  React.useEffect(() => {
    if (!joined && gameId) joinGame(gameId);
  }, [gameId, joined, joinGame]);

  return (
    <div>
      <GameContainer />
    </div>
  );
};

export default Room;
