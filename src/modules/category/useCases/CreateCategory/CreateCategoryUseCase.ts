import { Category } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { ICreateCategoryDTO } from '@modules/category/repositories/CategoriesDTO';
import { ICategoriesRepository } from '@modules/category/repositories/ICategoriesRepository';

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  public async execute({
    name,
    description,
  }: ICreateCategoryDTO): Promise<Category> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name,
    );

    if (categoryAlreadyExists) {
      throw new AppError('Category already exists');
    }

    const category = this.categoriesRepository.create({ name, description });

    return category;
  }
}
