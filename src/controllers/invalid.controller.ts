import { Request, Response } from 'express';
import createError, { HttpError } from 'http-errors';

import { ERRORS } from '../constants';

const notAllowed = (request: Request, response: Response) => {
    let err: HttpError = createError(404, ERRORS.routNotExist);

    response.status(err.status).send({ status: err.status, message: err.message });
};

export const invalidController = {
    notAllowed
};
