import express from 'express';

const app = express();
const port = 9000;

app.get('/', (_req, res) => {
  res.send('hello, world');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://localhost::${port}`);
});
