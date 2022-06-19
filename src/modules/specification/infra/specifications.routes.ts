import { Router } from 'express';

import { CreateSpecificationController } from '../useCases/CreateSpecification/CreateSpecificationController';
import { FindAllSpecificationsController } from '../useCases/FindAllSpecifications/FindAllSpecificationsController';

export const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const findAllSpecificationsController = new FindAllSpecificationsController();

specificationsRoutes.post('/', createSpecificationController.handle);

specificationsRoutes.get('/', findAllSpecificationsController.handle);
