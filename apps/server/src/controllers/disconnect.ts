import { Socket } from 'socket.io';
import {
  socketIdToClientIds,
  clientIdsToRoomIds,
  roomIdsToGameStates
} from '../db';

export const disconnect = (
  { socket }: { socket: Socket },
  callback: (roomId: string) => void
) => {
  const clientId = socketIdToClientIds[socket.id];
  const roomId = clientIdsToRoomIds[clientId];

  try {
    if (!roomId || !clientId) return;

    delete socketIdToClientIds[socket.id];
    delete clientIdsToRoomIds[clientId];
    roomIdsToGameStates[roomId].active = false;

    if (roomIdsToGameStates[roomId].players.X === clientId) {
      roomIdsToGameStates[roomId].players.X = null;
    }

    if (roomIdsToGameStates[roomId].players.O === clientId) {
      roomIdsToGameStates[roomId].players.O = null;
    }

    if (
      !roomIdsToGameStates[roomId].players.X &&
      !roomIdsToGameStates[roomId].players.O
    ) {
      delete roomIdsToGameStates[roomId];
    }

    callback(roomId);
  } catch (err: any) {
    console.log(err.message);
    socket.emit('socketError', {
      status: false,
      message: 'Error occured while disconnecting'
    });
    callback(roomId);
  }
};
