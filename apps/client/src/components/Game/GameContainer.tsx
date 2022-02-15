import * as React from 'react';
import { useGameState } from '../../hooks/useGameState';

import Winner from './Winner';
import GameBoard from './GameBoard';
import History from './History';
import ChatContainer from '../Chat/ChatContainer';

const GameContainer = () => {
  const { winner } = useGameState();

  return (
    <div>
      {winner && <Winner />}
      <GameBoard />
      <History />
      <ChatContainer />
    </div>
  );
};

export default GameContainer;
