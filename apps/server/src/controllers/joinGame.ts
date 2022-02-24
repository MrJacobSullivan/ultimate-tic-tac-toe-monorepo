import { Socket } from 'socket.io';
import {
  socketIdToClientIds,
  clientIdsToRoomIds,
  roomIdsToGameStates
} from '../db';

export const joinGame = (
  {
    socket,
    roomId,
    clientId
  }: {
    socket: Socket;
    roomId: string;
    clientId: string;
  },
  callback: (roomId: string) => void
) => {
  try {
    if (!roomIdsToGameStates[roomId]) {
      socket.emit('socketError', {
        status: false,
        message: 'Room Id does not exist'
      });
      throw Error('Room Id does not exist');
    }

    if (
      roomIdsToGameStates[roomId].players.X &&
      roomIdsToGameStates[roomId].players.O
    ) {
      socket.emit('socketError', {
        status: false,
        message: 'This room is full'
      });
      throw Error('This room is full');
    }

    socket.join(roomId);

    socketIdToClientIds[socket.id] = clientId;
    clientIdsToRoomIds[clientId] = roomId;
    roomIdsToGameStates[roomId].players.O = clientId;

    callback(roomId);
  } catch (err: any) {
    console.log(err.message);
    socket.emit('socketError', {
      status: false,
      message: err.message
    });
    callback(roomId);
  }
};
