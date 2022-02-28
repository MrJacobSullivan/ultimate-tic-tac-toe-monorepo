import { Coordinate } from 'engine';
import * as React from 'react';
import { GameContext } from '../contexts/GameContext';
import { place } from 'engine';

export const useHandlePlace = () => {
  const { state, setState } = React.useContext(GameContext);

  const handlePlace = React.useCallback(
    (i: Coordinate, j: Coordinate) => {
      const newState = place({ state, move: { i, j } });
      setState(newState);
    },
    [state, setState]
  );

  return handlePlace;
};
