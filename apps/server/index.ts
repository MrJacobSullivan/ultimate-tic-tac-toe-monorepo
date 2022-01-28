import createServer from './src/server';

const port = process.env.PORT || 9000;
const server = createServer();

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://localhost::${port}`);
});
