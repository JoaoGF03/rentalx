import { Router } from 'express';

import { ensureAuthenticated } from '@shared/middlewares/ensureAuthenticated';

import { CreateSpecificationController } from '../useCases/CreateSpecification/CreateSpecificationController';
import { FindAllSpecificationsController } from '../useCases/FindAllSpecifications/FindAllSpecificationsController';

export const specificationsRouter = Router();

const createSpecificationController = new CreateSpecificationController();
const findAllSpecificationsController = new FindAllSpecificationsController();

specificationsRouter.use(ensureAuthenticated);

specificationsRouter.post('/', createSpecificationController.handle);

specificationsRouter.get('/', findAllSpecificationsController.handle);
