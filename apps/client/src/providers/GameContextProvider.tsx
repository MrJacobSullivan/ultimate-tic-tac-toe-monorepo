import * as React from 'react';
import { State } from 'engine';
import { GameContext } from '../contexts/GameContext';
import { useGameContextReducer } from '../hooks/useGameContextReducer';

const GameContextProvider: React.FC<{
  initialState: State;
}> = ({ initialState, children }) => {
  const reducerValue = useGameContextReducer(initialState);

  return (
    <GameContext.Provider value={reducerValue}>{children}</GameContext.Provider>
  );
};

export default GameContextProvider;
