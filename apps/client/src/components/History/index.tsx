import * as React from 'react';
import { useGameState } from '../../hooks/useGameState';
import { useResetGame } from '../../hooks/useResetGame';
import { calculateAlphanumericCoordinate } from '../../utils';
import styles from './History.module.scss';

import Mark from '../Mark';

const History = () => {
  const { history, winner } = useGameState();
  const handleResetGame = useResetGame();

  if (!history) return null;

  // const handleSetToMove = (number: number) => {
  //   handleSet(history.slice(0, number + 1));
  // };

  return (
    <div className={styles.historyContainer}>
      {/* {history.map((move, number) => {
        const { x, y } = calculateAlphanumericCoordinate(move);
        return (
          <div
            className={
              number === history.length - 1
                ? styles.moveContainers__bottom
                : styles.moveContainers
            }
            onClick={() => handleSetToMove(number)}
          >
            <p className={styles.number}>{number + 1}</p>
            <p key={number} className={styles.move}>
              {x.toUpperCase()}
              {y}
            </p>
            {number % 2 === 0 ? (
              <Mark value="X" small />
            ) : (
              <Mark value="O" small />
            )}
          </div>
        );
      })}

      {winner && (
        <div className={styles.winnerContainer} onClick={() => handleReset()}>
          <p className={styles.winner}>{winner} is the Winner!</p>
        </div>
      )} */}
    </div>
  );
};

export default History;
