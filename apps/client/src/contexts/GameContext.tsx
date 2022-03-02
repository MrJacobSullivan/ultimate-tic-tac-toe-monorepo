import * as React from 'react';
import { initialState } from 'engine';
import { GameContextResult } from '../types/context';

export const GameContext = React.createContext<GameContextResult>({
  state: initialState,
  setState: () => null,
  resetState: () => null
});
