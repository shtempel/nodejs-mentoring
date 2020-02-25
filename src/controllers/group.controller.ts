import { Request, Response } from 'express';
import { groupService } from '../services';

import { requestHelper } from './error.helper';

const getGroups = (request: Request, response: Response) => {
    console.log('here');
    return requestHelper(() => groupService.getAllGroups(request.query), response);
};

const getGroupById = (request: Request, response: Response) =>
    requestHelper(() => groupService.getGroupById(request.params.group_id), response);

const addGroup = (request: Request, response: Response) =>
    requestHelper(() => groupService.addGroup(request.body), response);

const updateGroup = (request: Request, response: Response) =>
    requestHelper(() => groupService.updateGroup(request.params.group_id, request.body), response);

const deleteGroup = (request: Request, response: Response) => requestHelper(() =>
    groupService.deleteGroup(request.params.group_id), response);


export const groupController = {
    getGroups,
    getGroupById,
    addGroup,
    updateGroup,
    deleteGroup
};
