import { Router } from 'express';

import { categoriesRouter } from '@modules/category/infra/categories.routes';
import { specificationsRouter } from '@modules/specification/infra/specifications.routes';
import { authRouter } from '@modules/user/infra/auth.routes';
import { usersRouter } from '@modules/user/infra/users.routes';

export const routes = Router();

routes.use('/categories', categoriesRouter);
routes.use('/specifications', specificationsRouter);
routes.use('/users', usersRouter);
routes.use('/auth', authRouter);
