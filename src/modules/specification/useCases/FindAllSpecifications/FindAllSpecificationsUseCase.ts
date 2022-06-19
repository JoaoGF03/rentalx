import { inject, injectable } from 'tsyringe';

import { Specification } from '@modules/specification';
import { ISpecificationsRepository } from '@modules/specification/repositories/ISpecificationsRepository';

@injectable()
export class FindAllSpecificationsUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository,
  ) {}
  public async execute(): Promise<Specification[]> {
    const specifications = await this.specificationsRepository.findAll();

    return specifications;
  }
}
