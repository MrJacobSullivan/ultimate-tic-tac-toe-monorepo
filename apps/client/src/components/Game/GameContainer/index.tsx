import * as React from 'react';
import { useGameState } from '../../../hooks/useGameState';

import Winner from '../Winner';
import GameBoard from '../GameBoard';
// import History from '../History';
// import ChatContainer from '../../Chat/ChatContainer';

import Mark from '../Mark';

import styles from './GameContainer.module.scss';

const GameContainer = () => {
  const { winner, mark } = useGameState();

  return (
    <div className={styles.gameContainer}>
      <div>{winner && <Winner />}</div>

      <div className={styles.gameArea}>
        <GameBoard />

        {/* <div className={styles.sidebar}>
          <History />
          <ChatContainer />
        </div> */}
      </div>
    </div>
  );
};

export default GameContainer;
