import * as React from 'react';
import { useGameState } from '../../hooks/useGameState';

const History = () => {
  const { history } = useGameState();

  if (!history) return null;

  return (
    <div>
      {history.map((move, number) => (
        <li key={number}>
          {move.i} | {move.j}
        </li>
      ))}
    </div>
  );
};

export default History;
