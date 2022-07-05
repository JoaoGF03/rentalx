import { Router } from 'express';

import { CreateUserController } from '../useCases/CreateUser/CreateUserController';
import { FindAllUsersController } from '../useCases/FindAllUsers/FindAllUsersController';

export const usersRouter = Router();

const createUserController = new CreateUserController();
const findAllUsersController = new FindAllUsersController();

usersRouter.post('/', createUserController.handle);

usersRouter.get('/', findAllUsersController.handle);
