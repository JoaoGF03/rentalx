import { User } from '@prisma/client';

import { ICreateUserDTO } from './UsersDTO';

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByUsername(username: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
}
