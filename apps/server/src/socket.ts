import { Server, Socket } from 'socket.io';
import { nanoid } from 'nanoid';
import { State, validateState } from 'engine';
import { EVENTS } from './lib/events';

const games: Record<
  string,
  { state: State; users: string[]; O: string | null; X: string | null }
> = {};

const createSocket = ({ io }: { io: Server }) => {
  console.log('sockets enabled');

  const sockets: Socket[] = [];

  io.on(EVENTS.CONNECTION, (socket: Socket) => {
    console.log(`User connected ${socket.id}`);
    sockets.push(socket);

    socket.on(EVENTS.DISCONNECTION, () => {
      console.log(`User disconnected ${socket.id}`);

      const i = sockets.indexOf(socket);
      sockets.splice(i, 1);
    });

    socket.emit(EVENTS.SERVER.GAMES, games);

    socket.on(EVENTS.CLIENT.CREATE_GAME, ({ state }) => {
      const gameId = nanoid();
      games[gameId] = {
        state,
        users: [],
        O: null,
        X: null
      };

      socket.join(gameId);

      socket.broadcast.emit(EVENTS.SERVER.GAMES, games);
      socket.emit(EVENTS.SERVER.GAMES, games);
      socket.emit(EVENTS.SERVER.JOINED_GAME, gameId);
    });

    socket.on(EVENTS.CLIENT.MAKE_MOVE, ({ gameId, newState, username }) => {
      const previousState = games[gameId].state;
      const isValid = validateState({
        previousState,
        newState
      });

      if (isValid) {
        socket.to(gameId).emit(EVENTS.SERVER.GAME_MOVE, { newState, username });
      } else {
        socket
          .to(username)
          .emit(EVENTS.SERVER.REJECTED_MOVE, { previousState });
      }
    });

    socket.on(EVENTS.CLIENT.JOIN_GAME, (gameId) => {
      socket.join(gameId);
      socket.emit(EVENTS.SERVER.JOINED_GAME, gameId);
    });
  });
};

export default createSocket;
