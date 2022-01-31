import 'reflect-metadata';
import * as http from 'http';

import app from './app';
import socketServer from './socket';

const port = process.env.PORT || 9000;
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', () => {});
server.on('listening', () => {});

const io = socketServer(server);

export default io;
