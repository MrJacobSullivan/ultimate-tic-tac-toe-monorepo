import * as React from 'react';
import { Coordinate, Mark as EngineMark } from 'engine';
import { useGameState } from '../../../hooks/useGameState';
import { useHandlePlace } from '../../../hooks/useHandlePlace';
import styles from './LocalSquare.module.scss';
import Mark from '../Mark';

const LocalSquare = ({ i, j }: { i: Coordinate; j: Coordinate }) => {
  const { board, playable } = useGameState();
  const handlePlace = useHandlePlace();

  const handleClick = () =>
    handlePlace({ i, j }, (success) => {
      console.log(success);
    });

  if (board[i][j]) {
    return (
      <div className={styles.localSquare}>
        <Mark value={board[i][j] as EngineMark} />
      </div>
    );
  }

  if (playable === i || playable === null) {
    return (
      <div className={styles.localSquare__playable} onClick={handleClick} />
    );
  }

  return <div className={styles.localSquare} />;
};

export default LocalSquare;
