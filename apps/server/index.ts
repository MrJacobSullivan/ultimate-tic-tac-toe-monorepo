import { createServer } from 'http';
import { Server } from 'socket.io';
import app from './src/app';
import createSocket from './src/socket';
import { PORT } from './src/config';

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: '*',
    credentials: true
  }
});

httpServer.listen(PORT, () => {
  console.log(`** listening on port ${PORT} **`);

  createSocket({ io });
});
