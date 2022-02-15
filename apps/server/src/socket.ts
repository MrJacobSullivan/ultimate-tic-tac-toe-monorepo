import { Server, Socket } from 'socket.io';
import { nanoid } from 'nanoid';

const EVENTS = {
  connection: 'connection',
  CLIENT: {
    CREATE_GAME: 'CREATE_GAME',
    MAKE_MOVE: 'MAKE_MOVE',
    JOIN_GAME: 'JOIN_GAME'
  },
  SERVER: {
    GAMES: 'GAMES',
    JOINED_GAME: 'JOINED_GAME',
    GAME_MOVE: 'GAME_MOVE'
  }
};

const games: Record<string, { name: string }> = {};

const createSocket = ({ io }: { io: Server }) => {
  console.log('sockets enabled');

  io.on(EVENTS.connection, (socket: Socket) => {
    console.log(`User connected ${socket.id}`);

    socket.emit(EVENTS.SERVER.GAMES, games);

    socket.on(EVENTS.CLIENT.CREATE_GAME, ({ gameName }) => {
      console.log({ gameName });

      const gameId = nanoid();
      games[gameId] = {
        name: gameName
      };

      socket.join(gameId);

      socket.broadcast.emit(EVENTS.SERVER.GAMES, games);
      socket.emit(EVENTS.SERVER.GAMES, games);
      socket.emit(EVENTS.SERVER.JOINED_GAME, gameId);
    });

    socket.on(EVENTS.CLIENT.MAKE_MOVE, ({ gameId, move, username }) => {
      socket.to(gameId).emit(EVENTS.SERVER.GAME_MOVE, { move, username });
    });

    socket.on(EVENTS.CLIENT.JOIN_GAME, (gameId) => {
      socket.join(gameId);

      socket.emit(EVENTS.SERVER.JOINED_GAME, gameId);
    });
  });
};

export default createSocket;
