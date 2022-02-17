import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { initialState } from 'engine';
import ApplicationContext from './providers/ApplicationContextProvider';

import App from './App';
import 'preflight';
import './sass/global.scss';

import Home from './pages/Home';
// import Play from './pages/Play';
// import Room from './pages/Room';
// import Practice from './pages/Practice';
// import Learn from './pages/Learn';
import NotFound from './pages/NotFound';

ReactDOM.render(
  <React.StrictMode>
    <ApplicationContext initialState={initialState}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            {/* <Route path="play" element={<Play />}>
              <Route path=":room_id" element={<Room />} />
            </Route>
            <Route path="practice" element={<Practice />} />
            <Route path="learn" element={<Learn />} /> */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ApplicationContext>
  </React.StrictMode>,
  document.getElementById('root')
);
