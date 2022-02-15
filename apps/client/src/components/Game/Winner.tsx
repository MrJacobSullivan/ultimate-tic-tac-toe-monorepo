import * as React from 'react';
import { useGameState } from 'src/hooks/useGameState';

const Winner = () => {
  const { mark } = useGameState();

  return (
    <div>
      <p>{mark} is the winner!</p>
    </div>
  );
};

export default Winner;
