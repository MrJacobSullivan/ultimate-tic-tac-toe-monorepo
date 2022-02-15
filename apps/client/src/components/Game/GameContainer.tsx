import * as React from 'react';
import { useGameState } from '../../hooks/useGameState';

import Winner from './Winner';
import GameBoard from './GameBoard';
import History from './History';
import ChatContainer from '../Chat/ChatContainer';

import styles from './GameContainer.module.scss';

const GameContainer = () => {
  const { winner } = useGameState();

  return (
    <div className={styles.gameContainer}>
      {winner && <Winner />}
      <GameBoard />
      <History />
      <ChatContainer />
    </div>
  );
};

export default GameContainer;
