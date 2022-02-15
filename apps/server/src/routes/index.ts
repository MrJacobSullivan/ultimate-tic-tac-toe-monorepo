import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({ up: true, timestamp: Date.now() });
});

export default router;
