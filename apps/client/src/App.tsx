import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import Home from './pages/Home';
import Play from './pages/Play';

import { useGameState } from './hooks/useGameState';
import { useHandlePlace } from './hooks/useHandlePlace';

const App = () => {
  const { board } = useGameState();
  const handlePlace = useHandlePlace();

  return (
    <Router>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
        </Routes>

        <button onClick={() => handlePlace({ i: 0, j: 0 })}>Place</button>
      </Main>
      <Footer />
    </Router>
  );
};

export default App;
