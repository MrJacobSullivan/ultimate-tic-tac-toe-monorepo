import * as React from 'react';
import { initialState } from 'engine';
import { GameContextResult } from 'src/types';

export const GameContext = React.createContext<GameContextResult>({
  state: initialState,
  handlePlace: () => {},
  handleSet: () => {},
  handleReset: () => {}
});
