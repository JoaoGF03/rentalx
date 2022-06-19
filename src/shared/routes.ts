import { Router } from 'express';

import { categoriesRoutes } from '@modules/category/infra/categories.routes';
import { specificationsRoutes } from '@modules/specification/infra/specifications.routes';

export const routes = Router();

routes.use('/categories', categoriesRoutes);
routes.use('/specifications', specificationsRoutes);
