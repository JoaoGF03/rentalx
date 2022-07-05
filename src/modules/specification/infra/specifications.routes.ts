import { Router } from 'express';

import { CreateSpecificationController } from '../useCases/CreateSpecification/CreateSpecificationController';
import { FindAllSpecificationsController } from '../useCases/FindAllSpecifications/FindAllSpecificationsController';

export const specificationsRouter = Router();

const createSpecificationController = new CreateSpecificationController();
const findAllSpecificationsController = new FindAllSpecificationsController();

specificationsRouter.post('/', createSpecificationController.handle);

specificationsRouter.get('/', findAllSpecificationsController.handle);
