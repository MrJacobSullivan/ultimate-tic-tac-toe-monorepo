import * as React from 'react';
import { Coordinate } from 'engine';
import GlobalSquare from '../GlobalSquare';
import { useGameState } from '../../../hooks/useGameState';
import styles from './GlobalBoard.module.scss';

const GlobalBoard = () => {
  const { board } = useGameState();

  return (
    <div className={styles.globalBoard}>
      {board.map((_localBoard, i) => (
        <GlobalSquare key={i} i={i as Coordinate} />
      ))}
    </div>
  );
};

export default GlobalBoard;
