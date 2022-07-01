import { Category } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

import { ICategoriesRepository } from '@modules/category/repositories/ICategoriesRepository';

@injectable()
export class FindAllCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}
  public async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.findAll();

    return categories;
  }
}
