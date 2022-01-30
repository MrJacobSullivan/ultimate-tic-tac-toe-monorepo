import * as socketControllers from 'socket-controllers';
import * as socketio from 'socket.io';

const createSocketServer = (httpServer: any) => {
  const io = new socketio.Server(httpServer, {
    cors: {
      origin: '*'
    }
  });

  socketControllers.useSocketServer(io, {
    controllers: [__dirname + '/api/controllers/*.ts']
  });

  return io;
};

export default createSocketServer;
