import * as React from 'react';
import { Mark as EngineMark, CoordinatePair } from 'engine';
import { useGameState } from '../../hooks/useGameState';
import { useHandlePlace } from '../../hooks/useHandlePlace';
import Mark from './Mark';
import styles from './GameBoard.module.scss';

const GameBoard = () => {
  const { board, recent } = useGameState();
  const handlePlace = useHandlePlace();

  return (
    <div className={styles.gameBoard}>
      {board.map((globalCell: any, i: number) => {
        if (typeof globalCell === 'string') {
          return (
            <div key={i} className={styles.globalBoard}>
              <div className={styles.globalCell}>
                <Mark global value={globalCell as EngineMark} />
              </div>
            </div>
          );
        }

        return (
          <div key={i} className={styles.globalBoard}>
            <div
              key={i}
              className={
                recent?.j === i
                  ? styles.globalCell__playable
                  : styles.globalCell
              }
            >
              {globalCell.map((localCell: any, j: number) => {
                if (localCell) {
                  return (
                    <div key={j} className={styles.localBoard}>
                      <div className={styles.localCell}>
                        <Mark value={localCell as EngineMark} />
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={j} className={styles.localBoard}>
                    <div
                      className={styles.localCell__playable}
                      onClick={() => handlePlace({ i, j } as CoordinatePair)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <button onClick={() => handlePlace({ i: 0, j: 0 })}>Move</button>
    </div>
  );
};

export default GameBoard;
