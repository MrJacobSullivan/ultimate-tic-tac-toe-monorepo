import * as express from 'express';
import * as http from 'http';
import * as socketio from 'socket.io';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as cors from 'cors';

interface User {
  name: string;
}

interface Message {
  from: User;
  content: string;
}

interface ChatMessage extends Message {
  time: Date;
}

export class GameServer {
  public static readonly PORT: number = 9000;
  private port: string | number = process.env.PORT || GameServer.PORT;

  private ioConfig = {};

  private app: express.Application = express.default();
  private server: http.Server = http.createServer(this.app);
  private io: socketio.Server = new socketio.Server(this.server, this.ioConfig);

  constructor() {
    this.initializeApi();
    this.initializeSockets();
  }

  private initializeApi() {
    this.app
      .disable('x-powered-by')
      .use(morgan.default('dev'))
      .use(bodyParser.urlencoded({ extended: true }))
      .use(bodyParser.json())
      .use(cors.default())
      .get('/', (_req, res) => {
        res.send({ apiUp: true });
      })
      .get('/hello', (_req, res) => {
        res.send({ message: 'hello' });
      });
  }

  private initializeSockets() {
    this.server.listen(this.port, () => {
      console.log(`Running server on http://localhost:${this.port}`);
    });

    this.io.on('connect', (socket: socketio.Socket) => {
      console.log(`Connected client on http://localhost:${this.port}`);

      socket.on('message', (message: Message) => {
        console.log(`[server](message): ${JSON.stringify(message)}`);
        this.io.emit('message', message);
      });

      socket.on('disconnect', () => {
        console.log('User disconnected');
      });
    });
  }

  public getApp() {
    return this.app;
  }
}
