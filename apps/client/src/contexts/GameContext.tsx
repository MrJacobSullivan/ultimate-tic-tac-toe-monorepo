import * as React from 'react';
import Engine from 'engine';
import { GameContextResult } from 'src/types';

export const GameContext = React.createContext<GameContextResult>({
  engine: new Engine(),
  handlePlace: () => {},
  handleSet: () => {},
  handleReset: () => {}
});
