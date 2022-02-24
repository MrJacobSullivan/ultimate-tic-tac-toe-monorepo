import { Server } from 'socket.io';
import { nanoid } from 'nanoid';
import { CoordinatePair } from 'engine';
import { roomIdsToGameStates } from './db';
import { createGame } from './controllers/createGame';
import { joinGame } from './controllers/joinGame';
import { disconnect } from './controllers/disconnect';
import { placeMark } from './controllers/placeMark';

const createSocket = ({ io }: { io: Server }) => {
  const broadcastState = (roomId: string) => {
    io.sockets.in(roomId).emit('stateUpdate', roomIdsToGameStates[roomId]);
  };

  io.sockets.on('connection', (socket) => {
    const randomId = nanoid();
    socket.emit('welcome', { clientId: randomId });

    socket.on('createGame', ({ clientId }: { clientId: string }) => {
      createGame({ socket, clientId }, (roomId) => {
        broadcastState(roomId);
      });
    });

    socket.on(
      'joinGame',
      ({ roomId, clientId }: { roomId: string; clientId: string }) => {
        joinGame({ socket, roomId, clientId }, (roomId) => {
          broadcastState(roomId);
        });
      }
    );

    socket.on(
      'placeMark',
      ({ newHistory }: { newHistory: CoordinatePair[] }) => {
        placeMark({ socket, newHistory }, (roomId) => {
          broadcastState(roomId);
        });
      }
    );

    socket.on('disconnecting', () => {
      disconnect({ socket }, (roomId) => {
        broadcastState(roomId);
      });
    });
  });
};

export default createSocket;
