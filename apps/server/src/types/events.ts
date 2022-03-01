import { State } from 'engine';
import { Server, Socket } from 'socket.io';
import { MessageType } from './data';

export interface ServerToClientEvents {
  'chat:messages': (messages: MessageType[]) => void;
  'chat:message': (message: MessageType) => void;
  'game:created': (gameId: string) => void;
  'game:open-games': (games: string[]) => void;
}

export interface ClientToServerEvents {
  'chat:message': (
    gameId: string,
    messageValue: string,
    callback?: (error: string) => void
  ) => void;
  'chat:messages': (gameId: string) => void;
  'game:join': (gameId?: string) => void;
  'game:move': (
    gameId: string,
    previousState: State,
    newState: State,
    callback?: (error: string) => void
  ) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  name: string;
  age: number;
}

export type IOSocketEvents = Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>;

export type ServerSocketEvents = Socket<
  ServerToClientEvents,
  ClientToServerEvents,
  InterServerEvents,
  SocketData
>;
