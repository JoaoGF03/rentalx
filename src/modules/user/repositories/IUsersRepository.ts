import { User } from '@prisma/client';

import { ICreateUserDTO } from './UsersDTO';

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
  findAll(): Promise<User[]>;
}
