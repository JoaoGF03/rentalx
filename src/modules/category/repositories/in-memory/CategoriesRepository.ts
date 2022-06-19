import { Category } from '@modules/category';

import { ICreateCategoryDTO } from '../CategoriesDTO';
import { ICategoriesRepository } from '../ICategoriesRepository';

export class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[] = [];

  public async create({
    name,
    description,
  }: ICreateCategoryDTO): Promise<Category> {
    const category = new Category({ name, description });

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

  public async remove(id: string): Promise<void> {
    this.categories = this.categories.filter(category => category.id !== id);
  }
}
