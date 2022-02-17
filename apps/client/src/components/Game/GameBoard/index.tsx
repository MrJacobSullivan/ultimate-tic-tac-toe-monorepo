import * as React from 'react';
import styles from './GameBoard.module.scss';

import GlobalBoard from '../GlobalBoard';

const GameBoard = () => {
  return (
    <div className={styles.gameBoard}>
      <GlobalBoard />
    </div>
  );
};

export default GameBoard;
