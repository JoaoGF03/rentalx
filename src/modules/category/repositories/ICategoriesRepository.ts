import { Category } from '@prisma/client';

import { ICreateCategoryDTO } from './CategoriesDTO';

export interface ICategoriesRepository {
  create(data: ICreateCategoryDTO): Promise<Category>;
  findAll(): Promise<Category[]>;
  findById(id: string): Promise<Category | undefined>;
  findByName(name: string): Promise<Category | undefined>;
  delete(id: string): Promise<void>;
}
