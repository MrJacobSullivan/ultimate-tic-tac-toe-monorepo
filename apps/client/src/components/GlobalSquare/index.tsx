import * as React from 'react';
import { Coordinate, Mark as EngineMark } from 'engine';
import Mark from '../Mark';
import LocalBoard from '../LocalBoard';
import { useGameState } from '../../hooks/useGameState';
import styles from './GlobalSquare.module.scss';

const GlobalSquare = ({ i }: { i: Coordinate }) => {
  const { board, playable, winner } = useGameState();

  if (board[i].length === 1) {
    return (
      <div className={styles.globalSquare}>
        <Mark value={board[i] as EngineMark} global />
      </div>
    );
  }

  if ((playable === i || playable === null) && !winner) {
    return (
      <div className={styles.globalSquare__playable}>
        <LocalBoard i={i} />
      </div>
    );
  }

  return (
    <div className={styles.globalSquare}>
      <LocalBoard i={i} />
    </div>
  );
};

export default GlobalSquare;
