import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindAllSpecificationsUseCase } from './FindAllSpecificationsUseCase';

export class FindAllSpecificationsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const findAllSpecificationsUseCase = container.resolve(
      FindAllSpecificationsUseCase,
    );

    const specifications = await findAllSpecificationsUseCase.execute();

    return response.json(specifications);
  }
}
