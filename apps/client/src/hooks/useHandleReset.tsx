import * as React from 'react';
import { GameContext } from '../contexts/GameContext';

export const useHandleReset = () => {
  const { handleReset } = React.useContext(GameContext);
  return handleReset;
};
