import { Router } from 'express';

import { categoriesRoutes } from '@modules/category/infra/categories.routes';
import { specificationsRoutes } from '@modules/specification/infra/specifications.routes';
import { usersRoutes } from '@modules/user/infra/users.routes';

export const routes = Router();

routes.use('/categories', categoriesRoutes);
routes.use('/specifications', specificationsRoutes);
routes.use('/users', usersRoutes);
