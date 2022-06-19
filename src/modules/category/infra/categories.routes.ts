import { Router } from 'express';

import { CreateCategoryController } from '../useCases/CreateCategory/CreateCategoryController';
import { DeleteCategoryController } from '../useCases/DeleteCategory/DeleteCategoryController';
import { FindAllCategoriesController } from '../useCases/FindAllCategories/FindAllCategoriesController';

export const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const findAllCategoriesController = new FindAllCategoriesController();
const deleteCategoryController = new DeleteCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', findAllCategoriesController.handle);

categoriesRoutes.delete('/:id', deleteCategoryController.handle);
