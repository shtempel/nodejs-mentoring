import { Request, Response } from 'express';
import createError, { HttpError } from 'http-errors';

import { ERRORS } from '../constants';

export const requestHelper = async (fn: any, response: Response) => {
    try {
        const data = await fn();
        return data
            ? response.send({ data, status: 'success' })
            : response.send({ status: 'success' });
    } catch (error) {
        response.status(error.status || 500).send({ error: { message: error.message } });
    }
};

export const notAllowed = (request: Request, response: Response) => {
    let err: HttpError = createError(405, ERRORS.methodNotAllowed);

    response.status(err.status).send({ status: err.status, message: err.message });
};
