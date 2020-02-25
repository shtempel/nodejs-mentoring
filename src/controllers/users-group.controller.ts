import { Request, Response } from 'express';

import { usersGroupService } from '../services';
import { requestHelper } from './helper';

const addUsersToGroup = async (request: Request, response: Response) =>
    requestHelper(() => usersGroupService.addUsersToGroup(request.params.group_id, request.body.userIds), response, request);

export const usersGroupController = { addUsersToGroup };
