import * as React from 'react';
import { GameContext } from '../contexts/GameContext';

export const useHandleSet = () => {
  const { handleSet } = React.useContext(GameContext);
  return handleSet;
};
