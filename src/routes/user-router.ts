import express from 'express';

import { usersController } from '../controllers';
import { addUserBodySchema, updateUserBodySchema, updateUserQuerySchema, validator } from '../middlewares';
import { ROUTES } from './constants';

const userRouter = express.Router();
const routes = ROUTES.userRoutes;

userRouter.route(routes.root)
    .get(usersController.getUsers)
    .post(validator.body(addUserBodySchema), usersController.addUser)
    .all(usersController.notAllowed);

userRouter.route(routes.userId)
    .get(usersController.getUserById)
    .put(validator.params(updateUserQuerySchema), validator.body(updateUserBodySchema), usersController.updateUser)
    .delete(usersController.deleteUser)
    .all(usersController.notAllowed);

export default userRouter;
