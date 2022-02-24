import { Socket } from 'socket.io';
import {
  socketIdToClientIds,
  clientIdsToRoomIds,
  roomIdsToGameStates
} from '../db';
import { set, CoordinatePair } from 'engine';

export const placeMark = (
  {
    socket,
    newHistory
  }: {
    socket: Socket;
    newHistory: CoordinatePair[];
  },
  callback: (roomId: string) => void
) => {
  const clientId = socketIdToClientIds[socket.id];
  const roomId = clientIdsToRoomIds[clientId];
  const currentState = roomIdsToGameStates[roomId].state;
  const { history: previousHistory, mark: currentMark } = currentState;
  const { X: xClientId, O: oClientId } = roomIdsToGameStates[roomId].players;

  const { valid, error } = { valid: true, error: null }; // TODO

  if (valid) {
    if (currentMark === 'X' && clientId !== xClientId) return;
    else if (currentMark === 'O' && clientId !== oClientId) return;

    const newState = set({ state: currentState, history: newHistory });
    roomIdsToGameStates[roomId].state = newState;

    callback(roomId);
  } else {
    if (error) throw Error(error);
  }

  try {
  } catch (err: any) {
    console.log(err.message);
    socket.emit('socketError', {
      status: false,
      message: err.message
    });
    callback(roomId);
  }
};
