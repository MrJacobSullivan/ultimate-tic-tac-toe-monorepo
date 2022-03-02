import * as React from 'react';
import { Outlet } from 'react-router-dom';

import Page from './components/Page';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <Page>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Page>
  );
};

export default App;
