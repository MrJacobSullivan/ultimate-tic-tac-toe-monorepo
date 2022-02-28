import express from 'express';
import { games } from '../db';

const router = express.Router();

router.get('/', (req, res, next) => {
  let allGames = [];
  for (let gameId of Object.keys(games)) {
    allGames.push(gameId);
  }

  res.json({ games: allGames });
});

router.get('/open', (req, res, next) => {
  let availableGames: string[] = [];
  for (let [gameId, game] of Object.entries(games)) {
    if (game.players.X && !game.players.O) {
      availableGames.push(gameId);
    }
  }

  res.json({ games: availableGames });
});

router.get('/:gameId', (req, res, next) => {
  const game = games[req.params.gameId];
  if (game) {
    res.json({ players: game.players, state: game.state });
  } else {
    next({ status: 404, message: 'game not found' });
  }
});

export default router;
