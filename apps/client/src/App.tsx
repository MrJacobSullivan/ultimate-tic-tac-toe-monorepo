import * as React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/UserInterface/Header';
import Main from './components/UserInterface/Main';
import Footer from './components/UserInterface/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
};

export default App;
