import * as React from 'react';
import { Coordinate } from 'engine';
import { useGameState } from '../../../hooks/useGameState';
import styles from './LocalBoard.module.scss';

import LocalSquare from '../LocalSquare';

const LocalBoard = ({ i }: { i: Coordinate }) => {
  const { board } = useGameState();
  const localBoard = board[i];

  if (localBoard instanceof Array) {
    return (
      <div className={styles.localBoard}>
        {localBoard.map((_localCell, j) => (
          <LocalSquare key={j} i={i} j={j as Coordinate} />
        ))}
      </div>
    );
  }

  return null;
};

export default LocalBoard;
