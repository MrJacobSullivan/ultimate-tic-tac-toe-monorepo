import { Socket } from 'socket.io';
import { nanoid } from 'nanoid';
import { initialState } from 'engine';
import {
  socketIdToClientIds,
  clientIdsToRoomIds,
  roomIdsToGameStates
} from '../db';

export const createGame = (
  {
    socket,
    clientId
  }: {
    socket: Socket;
    clientId: string;
  },
  callback: (roomId: string) => void
) => {
  try {
    const roomId = nanoid();
    socket.join(roomId);

    if (!clientId) throw Error('no client id provided');

    socketIdToClientIds[socket.id] = clientId;
    clientIdsToRoomIds[clientId] = roomId;
    roomIdsToGameStates[roomId] = {
      state: initialState,
      players: { X: clientId, O: null },
      active: true
    };

    socket.emit('createGame', { roomId });
    callback(roomId);
  } catch (err: any) {
    console.log(err.message);
    socket.emit('socketError', {
      status: false,
      message: err.message
    });
  }
};
