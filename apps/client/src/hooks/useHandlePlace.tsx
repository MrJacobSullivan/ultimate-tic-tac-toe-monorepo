import * as React from 'react';
import { GameContext } from '../contexts/GameContext';

export const useHandlePlace = () => {
  const { handlePlace } = React.useContext(GameContext);
  return handlePlace;
};
