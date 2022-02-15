import * as React from 'react';
import { Coordinate, Mark as EngineMark } from 'engine';
import { useGameState } from 'src/hooks/useGameState';
import Mark from './Mark';
import LocalBoard from './LocalBoard';

const GlobalSquare = ({ i }: { i: Coordinate }) => {
  const { board, recent } = useGameState();

  if (recent) {
    if (board[recent.j].length === 1) {
      return (
        <div className="globalSquare">
          <Mark
            i={i}
            value={
              typeof board[recent.j] === 'string'
                ? (board[recent.j] as EngineMark)
                : 'X'
            }
            global
          />
        </div>
      );
    }

    return <div></div>;
  }

  return (
    <div className="globalSquare__playable">
      <LocalBoard i={i} />
    </div>
  );
};

export default GlobalSquare;
