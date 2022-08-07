import { AppError } from '@shared/errors/AppError';
import { prisma } from '@shared/infra/prisma';
import { BcryptHashProvider } from '@shared/providers/HashProvider/implementations/BcryptHashProvider';

import { UserBuilder } from '@modules/user/helpers/UserBuilder';
import { UsersRepository } from '@modules/user/repositories/implementations/UsersRepository';

import { CreateUserUseCase } from '../CreateUser/CreateUserUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

let createUser: CreateUserUseCase;
let authenticateUser: AuthenticateUserUseCase;

describe('AuthenticateUserUseCase', () => {
  beforeAll(async () => {
    const usersRepository = new UsersRepository();
    const hashProvider = new BcryptHashProvider();

    createUser = new CreateUserUseCase(usersRepository, hashProvider);
    authenticateUser = new AuthenticateUserUseCase(
      usersRepository,
      hashProvider,
    );
  });

  afterAll(async () => {
    await prisma.user.deleteMany({
      where: {
        name: {
          contains: '***Test',
        },
      },
    });

    await prisma.$disconnect();
  });

  it('should be able to authenticate an user', async () => {
    const user = new UserBuilder().build();

    await createUser.execute(user);

    const response = await authenticateUser.execute({
      email: user.email,
      password: user.password,
    });

    expect(response).toHaveProperty('user');
    expect(response).toHaveProperty('token');
  });

  it('should not be able to authenticate an user with non-existing email', async () => {
    const user = new UserBuilder().build();

    await expect(
      authenticateUser.execute({
        email: user.email,
        password: user.password,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate an user with wrong password', async () => {
    const user = new UserBuilder().build();

    await createUser.execute(user);

    await expect(
      authenticateUser.execute({
        email: user.email,
        password: 'wrong-password',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
