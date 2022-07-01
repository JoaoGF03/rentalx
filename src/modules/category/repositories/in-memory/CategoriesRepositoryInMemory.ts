import { Category } from '@prisma/client';
import { v4 as uuidV4 } from 'uuid';

import { ICreateCategoryDTO } from '../CategoriesDTO';
import { ICategoriesRepository } from '../ICategoriesRepository';

export class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[] = [];

  public async create({
    name,
    description,
  }: ICreateCategoryDTO): Promise<Category> {
    const category = {
      id: uuidV4(),
      name,
      description,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    };

    this.categories.push(category);

    return category;
  }

  public async findAll(): Promise<Category[]> {
    return this.categories;
  }

  public async findByName(name: string): Promise<Category | undefined> {
    return this.categories.find(category => category.name === name);
  }

  public async findById(id: string): Promise<Category | undefined> {
    return this.categories.find(category => category.id === id);
  }

  public async delete(id: string): Promise<void> {
    this.categories = this.categories.filter(category => category.id !== id);
  }
}
