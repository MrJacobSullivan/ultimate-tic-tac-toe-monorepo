import * as React from 'react';
import { State } from 'engine';
import { GameContext } from '../contexts/GameContext';

export const useGameState = (): State => {
  const { state } = React.useContext(GameContext);
  return state;
};
