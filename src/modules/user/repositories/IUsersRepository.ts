import { User } from '@prisma/client';

import { ICreateUserDTO, IUpdateAvatarDTO } from './UsersDTO';

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User>;
  pathAvatar(data: IUpdateAvatarDTO): Promise<User>;
}
