import * as React from 'react';
import { useGameState } from '../../../hooks/useGameState';
import { useHandleReset } from '../../../hooks/useHandleReset';
import styles from './Winner.module.scss';

const Winner = () => {
  const { winner } = useGameState();
  const handleReset = useHandleReset();

  return (
    <div className={styles.winnerContainer}>
      <p className={styles.winnerText} onClick={handleReset}>
        {winner} is the winner!
      </p>
    </div>
  );
};

export default Winner;
