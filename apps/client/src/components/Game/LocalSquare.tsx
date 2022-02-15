import * as React from 'react';
import { Coordinate } from 'engine';
import Mark from './Mark';
import { useGameState } from 'src/hooks/useGameState';
import { useHandlePlace } from 'src/hooks/useHandlePlace';

const LocalSquare = ({ i, j }: { i: Coordinate; j: Coordinate }) => {
  const { board, mark } = useGameState();
  const handlePlace = useHandlePlace();

  const handleClick = () => handlePlace({ i, j });

  if (board[i][j]) {
    return (
      <div>
        <Mark value={board[i][j]} i={i} j={j} />
      </div>
    );
  }

  return <div className="local-square" />;
};
