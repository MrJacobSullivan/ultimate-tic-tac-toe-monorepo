import * as React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import GameContainer from '../components/Game/GameContainer';

const Room = () => {
  const { gameId } = useParams();

  return (
    <div>
      <GameContainer />
    </div>
  );
};

export default Room;
