import { createServer } from 'http';
import { Server } from 'socket.io';
import app from './src/app';
import { PORT } from './src/config';
import {
  ServerToClientEvents,
  ClientToServerEvents,
  InterServerEvents,
  SocketData
} from 'socket-events';

import Connection from './src/connection';

const httpServer = createServer(app);

const io = new Server<
  ServerToClientEvents,
  ClientToServerEvents,
  InterServerEvents,
  SocketData
>(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  new Connection(io, socket);
});

httpServer.listen(PORT, () => {
  console.log(`** listening on port ${PORT} **`);
});
