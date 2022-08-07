import { JWT_SECRET } from '@utils/constants';
import { Request, Response, NextFunction } from 'express';
import { JwtPayload, verify } from 'jsonwebtoken';

import { AppError } from '@shared/errors/AppError';

import { UsersRepository } from '@modules/user/repositories/implementations/UsersRepository';

interface IJwtPayLoad extends JwtPayload {
  id: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: userId } = verify(token, JWT_SECRET) as IJwtPayLoad;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(userId);

    if (!user) {
      throw new AppError('User not found');
    }

    request.user = {
      id: userId,
    };

    return next();
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError('User not found', 404);
    }

    throw new AppError('Invalid JWT token', 401);
  }
}
