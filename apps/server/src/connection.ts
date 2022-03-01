import { nanoid } from 'nanoid';
import { Server, Socket } from 'socket.io';
import {
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
} from './types/events';
import { games, players, adminUser } from './db';
import { MessageType } from './types/data';
import { initialState, validateStateChange, State } from 'engine';

export default class Connection {
  constructor(
    private io: Server<
      ClientToServerEvents,
      ServerToClientEvents,
      InterServerEvents,
      SocketData
    >,
    private socket: Socket<
      ClientToServerEvents,
      ServerToClientEvents,
      InterServerEvents,
      SocketData
    >
  ) {
    this.logger(`${this.socket.id} has joined`);

    players[this.socket.id] = {
      id: this.socket.id,
      games: []
    };

    this.broadcastOpenGames();

    socket.on('game:join', (gameId) => this.joinGame(gameId));
    socket.on('game:move', (gameId, previousState, newState) =>
      this.handleMove(gameId, previousState, newState)
    );

    socket.on('chat:messages', (gameId) => this.getMessages(gameId));
    socket.on('chat:message', (gameId, messageValue) =>
      this.handleMessage(gameId, messageValue)
    );

    socket.on('disconnect', () => this.disconnect());
  }

  broadcastOpenGames() {
    let openGames: string[] = [];
    for (let [gameId, state] of Object.entries(games)) {
      if (state.open) openGames.push(gameId);
    }
    this.socket.emit('game:open-games', openGames);
    this.logger('broadcasting open games...');
  }

  joinGame(gameId?: string) {
    try {
      if (!gameId || !games[gameId]) {
        if (!gameId) gameId = nanoid();

        this.socket.join(gameId);
        this.socket.broadcast
          .to(gameId)
          .emit(
            'chat:message',
            this.constructMessage(
              `${this.socket.id} has joined the game.`,
              true
            )
          );

        players[this.socket.id].games.push(gameId);
        games[gameId] = {
          open: true,
          state: initialState,
          players: {
            X: this.socket.id,
            O: null
          },
          messages: new Set()
        };

        this.socket.emit('game:created', gameId);
        this.broadcastOpenGames();
        this.logger(`Created a room at ${gameId}`);
        this.logger(`${this.socket.id} has joined room ${gameId}`);
      } else if (games[gameId].open) {
        this.socket.join(gameId);
        this.socket.broadcast
          .to(gameId)
          .emit(
            'chat:message',
            this.constructMessage(
              `${this.socket.id} has joined the game.`,
              true
            )
          );

        players[this.socket.id].games.push(gameId);
        games[gameId].players.O = this.socket.id;
        games[gameId].open = false;

        this.broadcastOpenGames();
        this.logger(`${this.socket.id} has joined game ${gameId}`);
      } else {
        this.logger('[SOCKET ERROR] Game is full.');
      }
    } catch (err: any) {
      console.error(err);
    }
  }

  handleMove(gameId: string, previousState: State, newState: State) {
    const isValid = validateStateChange({ previousState, newState });

    if (isValid) {
      games[gameId].state = newState;

      if (games[gameId].state.winner) {
        this.handleWinner(gameId);
      }
    } else {
      console.error('[Engine Error] Invalid State Change');
    }
  }

  handleWinner(gameId: string) {
    const winner = games[gameId].state.winner;
    if (winner) {
      const winnerId = games[gameId].players[winner];
      // TODO: handle winner
    }
  }

  forfeit(gameId: string) {
    if (games[gameId]) {
      delete games[gameId];
      this.logger(`${this.socket.id} has forfeighted ${gameId}`);
    }
  }

  constructMessage(messageValue: string, admin = false): MessageType {
    return {
      id: nanoid(),
      player: admin ? adminUser : players[this.socket.id],
      value: messageValue
    };
  }

  getMessages(gameId: string) {
    games[gameId].messages.forEach((message) => {
      this.sendMessage(message);
    });
  }

  sendMessage(message: MessageType) {
    this.io.sockets.emit('chat:message', message);
  }

  handleMessage(gameId: string, messageValue: string) {
    const constructedMessage = this.constructMessage(messageValue);

    games[gameId].messages.add(constructedMessage);
    this.sendMessage(constructedMessage);

    this.logger(constructedMessage);
  }

  disconnect() {
    players[this.socket.id].games.forEach((gameId) => {
      this.forfeit(gameId);
    });

    delete players[this.socket.id];
    this.logger(`${this.socket.id} has disconnected`);
  }

  getRooms() {
    this.logger(games);
  }

  getPlayers(gameId: string) {
    this.logger(games[gameId]?.players);
  }

  logger(...message: any) {
    console.log('[LOGGER]:', JSON.stringify(message, null, 4));
  }
}
