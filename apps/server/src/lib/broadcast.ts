import { Server } from 'socket.io';

import { roomIdsToGameStates } from '../db';

export const broadcastState = ({
  io,
  roomId
}: {
  io: Server;
  roomId: string;
}) => {
  io.sockets.in(roomId).emit('update', roomIdsToGameStates[roomId].state);
};
