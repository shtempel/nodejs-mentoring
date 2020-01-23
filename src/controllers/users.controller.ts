import { Request, Response } from 'express';
import createError, { HttpError } from 'http-errors';

import { ERRORS } from '../constants';
import { userService } from '../services';
import { requestHelper } from './error.helper';

const getUsers = async (request: Request, response: Response) =>
    requestHelper(() => userService.getAllUsers(request.query), response);

const getUserById = async (request: Request, response: Response) =>
    requestHelper(() => userService.getUserById(request.params.userId), response);

const addUser = async (request: Request, response: Response) =>
    requestHelper(() => userService.addUser(request.body), response);

const updateUser = async (request: Request, response: Response) =>
    requestHelper(() => userService.updateUser(request.params.userId, request.body), response);

const deleteUser = async (request: Request, response: Response) =>
    requestHelper(() => userService.deleteUser(request.params.userId), response);

const notAllowed = (request: Request, response: Response) => {
    let err: HttpError = createError(405, ERRORS.methodNotAllowed);

    response.status(err.status).send({ status: err.status, message: err.message });
};

export const usersController = {
    getUsers,
    deleteUser,
    updateUser,
    getUserById,
    addUser,
    notAllowed
};
