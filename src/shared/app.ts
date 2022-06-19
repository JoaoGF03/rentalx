import 'reflect-metadata';
import 'express-async-errors';
import '@shared/container';
import express, { Request, Response, NextFunction, json } from 'express';

import { AppError } from './errors/AppError';
import { routes } from './routes';

export const app = express();

app.use(json());

app.use(routes);

app.use(
  (err: Error, _request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    console.log('🚀 ~ file: app.ts ~ line 20 ~ err', err);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);
