import * as React from 'react';
import Engine from 'engine';
import { GameContext } from '../contexts/GameContext';
import { useGameStateReducer } from '../hooks/useGameStateReducer';

const GameContextProvider: React.FC<{
  initialEngine: Engine;
}> = ({ initialEngine, children }) => (
  <GameContext.Provider value={useGameStateReducer(initialEngine)}>
    {children}
  </GameContext.Provider>
);

export default GameContextProvider;
