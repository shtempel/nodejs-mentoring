import express from 'express';

import { groupController } from '../controllers';

import { ROUTES } from './constants';

const groupRouter = express.Router();
const routes = ROUTES.groupRoutes;

groupRouter.route(routes.root)
    .get(groupController.getGroups)
    .post(groupController.addGroup);

groupRouter.route(routes.group_id)
    .get(groupController.getGroupById)
    .put(groupController.updateGroup)
    .delete(groupController.deleteGroup);

export default groupRouter;
