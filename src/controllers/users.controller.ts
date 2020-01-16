import { Request, Response } from 'express';
import createError, { HttpError } from 'http-errors';

import { ERRORS } from '../constants';
import { userService } from '../services';

const getUsers = async (request: Request, response: Response) => {
    try {
        const users = await userService.getAllUsers(request.query);

        return response.json(users).send({ status: 'success' });
    } catch (error) {
        response.status(error.status).send();
    }
};

const getUserById = async (request: Request, response: Response) => {
    try {
        const user: any = await userService.getUserById(request.params.userId);

        if ( !user ) throw ({ status: 404, message: ERRORS.userNotFound });

        return response.send({ user: user, status: 'success' })
    } catch (error) {
        const err: HttpError = createError(400, { message: error.message });

        response.status(error.status).send({ error: err });
    }
};

const addUser = async (request: Request, response: Response) => {
    try {
        const user = await userService.addUser(request.body);

        response.send({ status: 'success' }).json(user);
    } catch (error) {
        const err: HttpError = createError(400, { message: error.message });

        response.status(err.status).send({ error: err });
    }
};

const updateUser = async (request: Request, response: Response) => {
    try {
        await userService.updateUser(request.params.userId, request.body);

        response.send({ status: 'success' });
    } catch (error) {
        const err: HttpError = createError(404, { message: ERRORS.userNotFound });

        response.status(err.status).send({ error: err });
    }
};

const deleteUser = async (request: Request, response: Response) => {
    try {
        await userService.deleteUser(request.params.userId);

        response.send({ status: 'success' });
    } catch (error) {
        const err: HttpError = createError(404, { message: error.message });

        response.status(err.status).send({ error: err });
    }
};

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
