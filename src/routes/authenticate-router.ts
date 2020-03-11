import express from 'express';

import { notAllowed } from '../controllers';
import { authenticateController } from '../controllers';
import { authBodySchema, validator } from '../middlewares';

import { ROUTES } from './constants';

const authenticateRouter = express.Router();
const routes = ROUTES.authenticate;

authenticateRouter.route(routes.root)
    .post(validator.body(authBodySchema), authenticateController.authenticate)
    .all(notAllowed);

export default authenticateRouter;
