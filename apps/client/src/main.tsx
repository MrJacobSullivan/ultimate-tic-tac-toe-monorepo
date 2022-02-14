import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { initialState } from 'engine';
import GameContextProvider from './providers/GameContextProvider';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GameContextProvider initialState={initialState}>
      <App />
    </GameContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
