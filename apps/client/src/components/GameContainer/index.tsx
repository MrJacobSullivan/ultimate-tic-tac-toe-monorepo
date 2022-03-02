import * as React from 'react';
import GameBoard from '../GameBoard';
import History from '../History';
import styles from './GameContainer.module.scss';

const GameContainer = () => {
  return (
    <div className={styles.gameContainer}>
      <div className={styles.gameArea}>
        <GameBoard />

        {/* <div className={styles.sidebar}>
          <History />
        </div> */}
      </div>
    </div>
  );
};

export default GameContainer;
