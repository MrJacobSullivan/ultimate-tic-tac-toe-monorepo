import * as React from 'react';
import { Coordinate } from 'engine';
import { ApplicationContext } from '../contexts/ApplicationContext';

export const useGameState = () => {
  const [playable, setPlayable] = React.useState<null | Coordinate>(null);
  const { state } = React.useContext(ApplicationContext);

  React.useEffect(() => {
    if (state.recent !== null) {
      const { j } = state.recent;
      if (state.board[j].length > 1) {
        setPlayable(j);
      } else {
        setPlayable(null);
      }
    }
  }, [state.recent, state.board]);

  return { ...state, playable };
};
