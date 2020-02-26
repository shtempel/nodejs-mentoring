import express from 'express';

import { ROUTES } from './constants';
import groupRouter from './group-router';
import invalidRouter from './invalid-routes';
import userRouter from './user-router';

const rootRouter = express.Router();
rootRouter.use(ROUTES.userRoutes.users, userRouter);
rootRouter.use(ROUTES.groupRoutes.groups, groupRouter);
rootRouter.use(ROUTES.invalid.root, invalidRouter);

export default rootRouter;
