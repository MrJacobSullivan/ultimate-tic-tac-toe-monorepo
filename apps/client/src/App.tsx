import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import Home from './pages/Home';
import Play from './pages/Play';
import Error from './pages/Error';

const App = () => (
  <Router>
    <Header />

    <Main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Main>

    <Footer />
  </Router>
);

export default App;
