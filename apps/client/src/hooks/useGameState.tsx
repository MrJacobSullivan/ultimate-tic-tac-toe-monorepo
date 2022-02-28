import * as React from 'react';
import { Coordinate } from 'engine';
import { GameContext } from '../contexts/GameContext';

export const useGameState = () => {
  const [playable, setPlayable] = React.useState<null | Coordinate>(null);
  const { state } = React.useContext(GameContext);

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
