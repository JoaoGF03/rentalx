import { Router } from 'express';

import { CreateUserController } from '../useCases/CreateUser/CreateUserController';
import { FindAllUsersController } from '../useCases/FindAllUsers/FindAllUsersController';

export const usersRoutes = Router();

const createUserController = new CreateUserController();
const findAllUsersController = new FindAllUsersController();

usersRoutes.post('/', createUserController.handle);

usersRoutes.get('/', findAllUsersController.handle);
