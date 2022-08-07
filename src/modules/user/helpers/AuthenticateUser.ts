import { container } from 'tsyringe';

import { AuthenticateUserUseCase } from '../useCases/AuthenticateUser/AuthenticateUserUseCase';
import { CreateUserUseCase } from '../useCases/CreateUser/CreateUserUseCase';
import { UserBuilder } from './UserBuilder';

export async function authenticateUser(): Promise<string> {
  const createUserUseCase = container.resolve(CreateUserUseCase);

  const user = new UserBuilder().build();

  await createUserUseCase.execute(user);

  const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

  const { token } = await authenticateUserUseCase.execute({
    email: user.email,
    password: user.password,
  });

  return token;
}
