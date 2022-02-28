import * as React from 'react';
import { GameContext } from '../contexts/GameContext';

export const useResetGame = () => {
  return React.useContext(GameContext).resetState;
};
