import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Play from './pages/Play';
import Error from './pages/Error';

const App = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/play">Play</Link>
    </nav>

    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>

    <footer>Footer</footer>
  </Router>
);

export default App;
