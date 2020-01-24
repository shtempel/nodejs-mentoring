import { Request, Response } from 'express';

import { userService } from '../services';
import { requestHelper } from './helper';

const getUsers = async (request: Request, response: Response) =>
    requestHelper(() => userService.getAllUsers(request.query), response);

const getUserById = async (request: Request, response: Response) =>
    requestHelper(() => userService.getUserById(request.params.user_id), response);

const addUser = async (request: Request, response: Response) =>
    requestHelper(() => userService.addUser(request.body), response);

const updateUser = async (request: Request, response: Response) =>
    requestHelper(() => userService.updateUser(request.params.user_id, request.body), response);

const deleteUser = async (request: Request, response: Response) =>
    requestHelper(() => userService.deleteUser(request.params.user_id), response);

export const usersController = {
    getUsers,
    deleteUser,
    updateUser,
    getUserById,
    addUser
};
