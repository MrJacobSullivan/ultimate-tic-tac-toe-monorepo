import express, { NextFunction, Request, Response } from 'express';
import error from 'http-errors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';

import indexRouter from './routes';
import gamesRouter from './routes/games';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/', indexRouter);
app.use('/games', gamesRouter);

app.use((req, res, next) => {
  next(error(404));
});

app.use(
  (err: error.HttpError, req: Request, res: Response, next: NextFunction) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.send(err.message);
  }
);

export default app;
