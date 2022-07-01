import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { ICategoriesRepository } from '@modules/category/repositories/ICategoriesRepository';

@injectable()
export class DeleteCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const category = await this.categoriesRepository.findById(id);

    if (!category) {
      throw new AppError('Category not found', 404);
    }

    this.categoriesRepository.delete(id);
  }
}
