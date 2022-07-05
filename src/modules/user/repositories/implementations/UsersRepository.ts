import { User } from '@prisma/client';

import { prisma } from '@shared/prisma';

import { IUsersRepository } from '../IUsersRepository';
import { ICreateUserDTO } from '../UsersDTO';

export class UsersRepository implements IUsersRepository {
  private ormRepository = prisma.user;

  public async create({
    driverLicense,
    email,
    name,
    password,
    username,
  }: ICreateUserDTO): Promise<User> {
    const user = await this.ormRepository.create({
      data: {
        driverLicense,
        email,
        name,
        password,
        username,
      },
    });

    return user;
  }

  public async findByUsername(username: string): Promise<User> {
    const user = await this.ormRepository.findUnique({
      where: {
        username,
      },
    });

    return user;
  }

  public async findByEmail(email: string): Promise<User> {
    const user = await this.ormRepository.findUnique({
      where: {
        email,
      },
    });

    return user;
  }
}
