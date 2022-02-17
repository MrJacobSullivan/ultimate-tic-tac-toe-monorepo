import { Server, Socket } from 'socket.io';
import { nanoid } from 'nanoid';
import { State, validateState, initialState } from 'engine';

const createSocket = ({ io }: { io: Server }) => {
  console.log('sockets enabled');

  const games: Record<
    string,
    {
      state: State;
      players: {
        X: string | null;
        O: string | null;
      };
    }
  > = {};
  const sockets: Socket[] = [];

  io.on('connection', (socket: Socket) => {
    console.log(`User connected ${socket.id}`);
    sockets.push(socket);

    socket.on('disconnection', () => {
      console.log(`User disconnected ${socket.id}`);

      const i = sockets.indexOf(socket);
      sockets.splice(i, 1);
    });

    socket.emit('games', games);

    socket.on('create', () => {
      const gameId = nanoid();
      games[gameId] = {
        state: initialState,
        players: {
          X: socket.id,
          O: null
        }
      };

      socket.join(gameId);

      socket.broadcast.emit('games', games);
      socket.emit('games', games);
      socket.emit('joined', gameId);
    });

    socket.on('join', ({ gameId }) => {
      const game = games[gameId];

      socket.join(gameId);

      if (game) {
        games[gameId].players.O = socket.id;
      } else {
        games[gameId] = {
          state: initialState,
          players: {
            X: socket.id,
            O: null
          }
        };

        socket.broadcast.emit('games', games);
        socket.emit('games', games);
      }

      socket.emit('joined', gameId);
    });

    socket.on('place', ({ gameId, newState, id }) => {
      const previousState = games[gameId].state;
      const isValid = validateState({
        previousState,
        newState
      });

      if (isValid) {
        socket.to(gameId).emit('game move', { newState });
      } else {
        socket.to(socket.id).emit('rejected', { previousState });
      }
    });
  });
};

export default createSocket;
