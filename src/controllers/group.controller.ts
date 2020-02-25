import { Request, Response } from 'express';

import { groupService } from '../services';
import { requestHelper } from './helper';

const getGroups = (request: Request, response: Response) =>
    requestHelper(() => groupService.getAllGroups(request.query), response, request);

const getGroupById = (request: Request, response: Response) =>
    requestHelper(() => groupService.getGroupById(request.params.group_id), response, request);

const addGroup = (request: Request, response: Response) =>
    requestHelper(() => groupService.addGroup(request.body), response, request);

const addUsersToGroup = (request: Request, response: Response) =>
    requestHelper(() => groupService.addUsersToGroup(request.params.group_id, request.body.userIds), response, request);

const updateGroup = (request: Request, response: Response) =>
    requestHelper(() => groupService.updateGroup(request.params.group_id, request.body), response, request);

const deleteGroup = (request: Request, response: Response) => requestHelper(() =>
    groupService.deleteGroup(request.params.group_id), response, request);


export const groupController = {
    getGroups,
    getGroupById,
    addGroup,
    updateGroup,
    deleteGroup,
    addUsersToGroup
};
