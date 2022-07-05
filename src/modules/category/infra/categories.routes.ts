import { Router } from 'express';
import multer from 'multer';
import { resolve } from 'node:path';

import { CreateCategoryController } from '../useCases/CreateCategory/CreateCategoryController';
import { DeleteCategoryController } from '../useCases/DeleteCategory/DeleteCategoryController';
import { FindAllCategoriesController } from '../useCases/FindAllCategories/FindAllCategoriesController';
import { ImportCategoriesController } from '../useCases/ImportCategories/ImportCategoriesController';

export const categoriesRouter = Router();

const upload = multer({
  dest: resolve(__dirname, '..', '..', '..', '..', 'tmp'),
});

const createCategoryController = new CreateCategoryController();
const importCategoriesController = new ImportCategoriesController();
const findAllCategoriesController = new FindAllCategoriesController();
const deleteCategoryController = new DeleteCategoryController();

categoriesRouter.post('/', createCategoryController.handle);

categoriesRouter.post(
  '/import',
  upload.single('file'),
  importCategoriesController.handle,
);

categoriesRouter.get('/', findAllCategoriesController.handle);

categoriesRouter.delete('/:id', deleteCategoryController.handle);
