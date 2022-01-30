import * as httpErrors from 'http-errors';
import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import * as morgan from 'morgan';
import * as cors from 'cors';
import 'reflect-metadata';

const app = express.default();

app.use(morgan.default('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser.default());
app.use(cors.default());

app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    next(httpErrors.default(404));
  }
);

app.use(
  (
    err: { message?: string; status?: number },
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(err.status || 500);
    res.json({ message: err.message });
  }
);

export default app;
