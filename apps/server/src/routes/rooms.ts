import express from 'express';
import { roomIdsToGameStates } from '../db';

const router = express.Router();

router.get('/', (req, res, next) => {
  let rooms = [];
  for (let roomId of Object.keys(roomIdsToGameStates)) {
    rooms.push(roomId);
  }

  res.json({ rooms });
});

router.get('/available', (req, res, next) => {
  let availableRooms = [];
  for (let [roomId, gameState] of Object.entries(roomIdsToGameStates)) {
    if (gameState.players.X === null || gameState.players.O) {
      availableRooms.push(roomId);
    }
  }

  res.json({ rooms: availableRooms });
});

export default router;
