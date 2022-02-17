import * as React from 'react';
import { useGameState } from '../../../hooks/useGameState';
import styles from './History.module.scss';

const History = () => {
  const { history } = useGameState();

  if (!history) return null;

  return (
    <div className={styles.historyContainer}>
      {history.map((move, number) => (
        <p key={number}>
          {move.i} | {move.j}
        </p>
      ))}
    </div>
  );
};

export default History;
