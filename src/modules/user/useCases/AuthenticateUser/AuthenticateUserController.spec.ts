import request from 'supertest';

import { app } from '@shared/infra/app';
import { prisma } from '@shared/infra/prisma';
import { BcryptHashProvider } from '@shared/providers/HashProvider/implementations/BcryptHashProvider';

import { UserBuilder } from '@modules/user/helpers/UserBuilder';
import { UsersRepository } from '@modules/user/repositories/implementations/UsersRepository';

import { CreateUserUseCase } from '../CreateUser/CreateUserUseCase';

let createUser: CreateUserUseCase;

describe('AuthenticateUserController', () => {
  beforeAll(async () => {
    const usersRepository = new UsersRepository();
    const hashProvider = new BcryptHashProvider();

    createUser = new CreateUserUseCase(usersRepository, hashProvider);
  });

  afterAll(async () => {
    await prisma.user.deleteMany({
      where: {
        name: {
          contains: '***Test',
        },
      },
    });
  });

  it('should be able to authenticate an user', async () => {
    const user = new UserBuilder().build();

    await createUser.execute(user);

    const response = await request(app).post('/auth').send({
      email: user.email,
      password: user.password,
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('user');
    expect(response.body).toHaveProperty('token');
  });

  it('should not be able to authenticate an user with non-existing email', async () => {
    const user = new UserBuilder().build();

    const response = await request(app).post('/auth').send({
      email: user.email,
      password: user.password,
    });

    expect(response.status).toBe(401);
  });

  it('should not be able to authenticate an user with wrong password', async () => {
    const user = new UserBuilder().build();

    await createUser.execute(user);

    const response = await request(app).post('/auth').send({
      email: user.email,
      password: 'wrong-password',
    });

    expect(response.status).toBe(401);
  });
});
