import { Request, Response } from 'express';

import { userService } from '../services';
import { requestHelper } from './helper';

const getUsers = async (request: Request, response: Response) =>
    requestHelper(() => userService.getAllUsers(request.query), response, request);

const getUserById = async (request: Request, response: Response) =>
    requestHelper(() => userService.getUserById(request.params.user_id), response, request);

const addUser = async (request: Request, response: Response) =>
    requestHelper(() => userService.addUser(request.body), response, request);

const updateUser = async (request: Request, response: Response) =>
    requestHelper(() => userService.updateUser(request.params.user_id, request.body), response, request);

const deleteUser = async (request: Request, response: Response) =>
    requestHelper(() => userService.deleteUser(request.params.user_id), response, request);

export const usersController = {
    getUsers,
    deleteUser,
    updateUser,
    getUserById,
    addUser
};
