import express from 'express';

import { ROUTES } from './constants';
import userRouter from './user-router';

const rootRouter = express.Router();
rootRouter.use(ROUTES.userRoutes.users, userRouter);

export default rootRouter;
