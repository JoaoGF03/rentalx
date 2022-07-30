import { Category } from '@prisma/client';

import { prisma } from '@shared/infra/prisma';

import { ICreateCategoryDTO } from '../CategoriesDTO';
import { ICategoriesRepository } from '../ICategoriesRepository';

export class CategoriesRepository implements ICategoriesRepository {
  private ormRepository = prisma.category;

  public async create({
    name,
    description,
  }: ICreateCategoryDTO): Promise<Category> {
    const category = await this.ormRepository.create({
      data: {
        name,
        description,
      },
    });

    return category;
  }

  public async findAll(): Promise<Category[]> {
    const categories = await this.ormRepository.findMany();

    return categories;
  }

  public async findByName(name: string): Promise<Category | undefined> {
    const category = await this.ormRepository.findFirst({
      where: {
        name,
      },
    });

    return category;
  }

  public async findById(id: string): Promise<Category | undefined> {
    const category = await this.ormRepository.findUnique({
      where: {
        id,
      },
    });

    return category;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete({
      where: {
        id,
      },
    });
  }
}
