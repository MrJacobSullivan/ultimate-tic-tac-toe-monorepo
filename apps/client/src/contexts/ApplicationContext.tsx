import * as React from 'react';
import { initialState } from 'engine';
import { ApplicationContextResult } from '../types';

export const ApplicationContext = React.createContext<ApplicationContextResult>(
  {
    state: initialState,
    setSocket: () => {},
    handlePlace: () => {},
    handleSet: () => {},
    handleReset: () => {}
  }
);
