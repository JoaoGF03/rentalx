import { container } from 'tsyringe';

import { ICategoriesRepository } from '@modules/category/repositories/ICategoriesRepository';
import { CategoriesRepository } from '@modules/category/repositories/implementations/CategoriesRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);
