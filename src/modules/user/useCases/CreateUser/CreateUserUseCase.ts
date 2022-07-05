import { User } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IUsersRepository } from '@modules/user/repositories/IUsersRepository';
import { ICreateUserDTO } from '@modules/user/repositories/UsersDTO';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    driverLicense,
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) throw new AppError('User already exists');

    const user = await this.usersRepository.create({
      driverLicense,
      email,
      name,
      password,
    });

    return user;
  }
}