import * as React from 'react';
import { range } from '../../utils';
import GlobalSquare from './GlobalSquare';
import { useGameState } from '../../hooks/useGameState';
import { useHandlePlace } from '../../hooks/useHandlePlace';
import Mark from './Mark';
import { Mark as EngineMark, CoordinatePair } from 'engine';

const GameBoard = () => {
  const { board, recent } = useGameState();
  const handlePlace = useHandlePlace();

  return (
    <div className="game">
      {/* {range(9).map((i) => (
        <GlobalSquare key={i} i={i} />
      ))} */}

      {board.map((globalCell: any, i: number) => {
        if (typeof globalCell === 'string') {
          return (
            <div key={i} className="globalCell">
              <Mark global value={globalCell as EngineMark} />
            </div>
          );
        }

        return (
          <div
            key={i}
            className={recent?.j === i ? 'globalCell__playable' : 'globalCell'}
          >
            {globalCell.map((localCell: any, j: number) => {
              if (localCell) {
                return (
                  <div key={j}>
                    <Mark value={localCell as EngineMark} />
                  </div>
                );
              }

              return (
                <div
                  key={j}
                  onClick={() => handlePlace({ i, j } as CoordinatePair)}
                />
              );
            })}
          </div>
        );
      })}

      <button onClick={() => handlePlace({ i: 0, j: 0 })}>Move</button>
    </div>
  );
};

export default GameBoard;
