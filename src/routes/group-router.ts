import express from 'express';

import { groupController, usersGroupController } from '../controllers';
import { notAllowed } from '../controllers';
import {
    addGroupBodySchema,
    addUsersToGroupBodySchema,
    addUsersToGroupQuerySchema,
    updateGroupBodySchema,
    updateGroupQuerySchema,
    validator
} from '../middlewares';
import { ROUTES } from './constants';

const groupRouter = express.Router();
const routes = ROUTES.groupRoutes;

groupRouter.route(routes.root)
    .get(groupController.getGroups)
    .post(validator.body(addGroupBodySchema), groupController.addGroup)
    .all(notAllowed);

groupRouter.route(routes.group_id)
    .get(groupController.getGroupById)
    .put(validator.params(updateGroupQuerySchema), validator.body(updateGroupBodySchema), groupController.updateGroup)
    .delete(groupController.deleteGroup)
    .all(notAllowed);

groupRouter.route(routes.users)
    .post(
        validator.params(addUsersToGroupQuerySchema),
        validator.body(addUsersToGroupBodySchema),
        usersGroupController.addUsersToGroup
    )
    .all(notAllowed);

export default groupRouter;
