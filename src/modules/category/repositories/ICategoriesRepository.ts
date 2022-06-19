import { Category } from '@modules/category';

import { ICreateCategoryDTO } from './CategoriesDTO';

export interface ICategoriesRepository {
  create(data: ICreateCategoryDTO): Promise<Category>;
  findAll(): Promise<Category[]>;
  findById(id: string): Promise<Category | undefined>;
  findByName(name: string): Promise<Category | undefined>;
  remove(id: string): Promise<void>;
}
