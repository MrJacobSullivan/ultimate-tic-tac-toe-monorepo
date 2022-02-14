import * as React from 'react';
import { State } from 'engine';
import { GameContext } from '../contexts/GameContext';
import { useGameStateReducer } from '../hooks/useGameStateReducer';

const GameContextProvider: React.FC<{
  initialState: State;
}> = ({ initialState, children }) => (
  <GameContext.Provider value={useGameStateReducer(initialState)}>
    {children}
  </GameContext.Provider>
);

export default GameContextProvider;
