import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { driverLicense, email, name, password } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    const user = await createUserUseCase.execute({
      driverLicense,
      email,
      name,
      password,
    });

    return response.status(201).json(user);
  }
}
