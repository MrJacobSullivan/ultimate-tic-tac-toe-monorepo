import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Engine from 'engine';
import GameContextProvider from './providers/GameContextProvider';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GameContextProvider initialEngine={new Engine()}>
      <App />
    </GameContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
