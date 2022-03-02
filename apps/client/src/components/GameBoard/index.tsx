import * as React from 'react';
import GlobalBoard from '../GlobalBoard';
import styles from './GameBoard.module.scss';

const GameBoard = () => {
  return (
    <div className={styles.gameBoard} data-testid="gameBoard">
      <GlobalBoard />
    </div>
  );
};

export default GameBoard;
