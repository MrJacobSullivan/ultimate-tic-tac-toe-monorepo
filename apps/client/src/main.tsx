import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { initialState } from 'engine';

import App from './App';
import GameContainer from './components/GameContainer';
import GameContextProvider from './providers/GameContextProvider';

import 'preflight';
import './sass/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <GameContextProvider initialState={initialState}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<GameContainer />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </Router>
    </GameContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
