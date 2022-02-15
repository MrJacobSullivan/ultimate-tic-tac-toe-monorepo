import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { io } from 'socket.io-client';

import Header from './components/UserInterface/Header';
import Main from './components/UserInterface/Main';
import Footer from './components/UserInterface/Footer';

const App = () => {
  const connectSocket = () => {
    const socket = io('http://localhost:8080');
    console.log(socket);
  };

  React.useEffect(() => {
    connectSocket();
  }, []);

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
