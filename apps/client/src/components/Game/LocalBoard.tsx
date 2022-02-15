import * as React from 'react';
import { Coordinate } from 'engine';
import { range } from 'src/utils';
import LocalSquare from './LocalSquare';

const LocalBoard = ({ i }: { i: Coordinate }) => {
  return (
    <div>
      {range(9).map((j) => (
        <LocalSquare key={i} i={i} j={j} />
      ))}
    </div>
  );
};

export default LocalBoard;
