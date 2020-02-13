import express from 'express';

import { invalidController } from '../controllers';
import { ROUTES } from './constants';

const invalidRouter = express.Router();
const routes = ROUTES.invalid;

invalidRouter.route(routes.root).all(invalidController.notAllowed);

export default invalidRouter;
