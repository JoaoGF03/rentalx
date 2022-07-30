import { User } from '@prisma/client';

import { prisma } from '@shared/infra/prisma';

import { IUsersRepository } from '../IUsersRepository';
import { ICreateUserDTO, IUpdateAvatarDTO } from '../UsersDTO';

export class UsersRepository implements IUsersRepository {
  private ormRepository = prisma.user;

  public async create({
    driverLicense,
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = await this.ormRepository.create({
      data: {
        driverLicense,
        email,
        name,
        password,
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

  public async findAll(): Promise<User[]> {
    const users = await this.ormRepository.findMany();

    return users;
  }

  public async findById(id: string): Promise<User> {
    const user = await this.ormRepository.findUnique({
      where: {
        id,
      },
    });

    return user;
  }

  public async pathAvatar({
    id,
    avatarFileName,
  }: IUpdateAvatarDTO): Promise<User> {
    const user = await this.ormRepository.update({
      where: {
        id,
      },
      data: {
        avatar: avatarFileName,
      },
    });

    return user;
  }
}
