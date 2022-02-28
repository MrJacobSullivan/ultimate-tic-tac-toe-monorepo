import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IoProvider as SocketProvider } from 'socket.io-react-hook';

import App from './App';
import 'preflight';
import './sass/global.scss';

// import Home from './pages/Home';
// import Play from './pages/Play';
// import Game from './pages/Game';
import Practice from './pages/Practice';
// import Learn from './pages/Learn';
import NotFound from './pages/NotFound';

ReactDOM.render(
  <React.StrictMode>
    <SocketProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Practice />} />
            {/* <Route path="play" element={<Play />} />
            <Route path="/play/:gameId" element={<Game />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="learn" element={<Learn />} /> */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </SocketProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
