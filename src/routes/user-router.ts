import express from 'express';

import { usersController } from '../controllers';
import { addUserBodySchema, updateUserBodySchema, updateUserQuerySchema, validator } from '../middlewares';
import { ROUTES } from './constants';

const userRouter = express.Router();

userRouter.route(ROUTES.userRoutes.root)
    .get(usersController.getUsers)
    .post(validator.body(addUserBodySchema), usersController.addUser)
    .all(usersController.notAllowed);

userRouter.route(ROUTES.userRoutes.userId)
    .get(usersController.getUserById)
    .put(validator.params(updateUserQuerySchema), validator.body(updateUserBodySchema), usersController.updateUser)
    .delete(usersController.deleteUser)
    .all(usersController.notAllowed);

export default userRouter;
