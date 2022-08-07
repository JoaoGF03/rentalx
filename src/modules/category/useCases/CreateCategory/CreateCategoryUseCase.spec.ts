import { AppError } from '@shared/errors/AppError';
import { prisma } from '@shared/infra/prisma';

import { CategoryBuilder } from '@modules/category/helpers/CategoryBuilder';
import { CategoriesRepository } from '@modules/category/repositories/implementations/CategoriesRepository';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

let createCategory: CreateCategoryUseCase;

describe('CreateCategoryUseCase', () => {
  beforeAll(async () => {
    const categoriesRepository = new CategoriesRepository();
    createCategory = new CreateCategoryUseCase(categoriesRepository);
  });

  afterAll(async () => {
    await prisma.category.deleteMany({
      where: {
        name: {
          contains: '***Test',
        },
      },
    });
  });

  it('should be able to create a new category', async () => {
    const category = await createCategory.execute(
      new CategoryBuilder().build(),
    );

    expect(category).toHaveProperty('id');
  });

  it('should not be able to create a new category with same name', async () => {
    const category = new CategoryBuilder().build();

    await createCategory.execute(category);

    await expect(createCategory.execute(category)).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
