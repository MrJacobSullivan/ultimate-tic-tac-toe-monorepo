import * as React from 'react';
import { Outlet } from 'react-router-dom';

import Page from './components/UserInterface/Page';
import Header from './components/UserInterface/Header';
import Main from './components/UserInterface/Main';
import Footer from './components/UserInterface/Footer';

import { useWebSocket } from './hooks/useWebSocket';

const App = () => {
  const { socket } = useWebSocket();

  React.useEffect(() => {
    if (socket) console.log(socket);
  }, [socket]);

  return (
    <Page>
      {/* <Header /> */}
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Page>
  );
};

export default App;
