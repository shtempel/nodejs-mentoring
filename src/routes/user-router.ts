import express from 'express';

import { usersController } from '../controllers';
import { notAllowed } from '../controllers/helper';
import { addUserBodySchema, updateUserBodySchema, updateUserQuerySchema, validator } from '../middlewares';
import { ROUTES } from './constants';

const userRouter = express.Router();
const routes = ROUTES.userRoutes;

userRouter.route(routes.root)
    .get(usersController.getUsers)
    .post(validator.body(addUserBodySchema), usersController.addUser)
    .all(notAllowed);

userRouter.route(routes.user_id)
    .get(usersController.getUserById)
    .put(validator.params(updateUserQuerySchema), validator.body(updateUserBodySchema), usersController.updateUser)
    .delete(usersController.deleteUser)
    .all(notAllowed);

export default userRouter;
