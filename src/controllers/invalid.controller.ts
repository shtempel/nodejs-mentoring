import { Request, Response } from 'express';
import createError, { HttpError } from 'http-errors';

import { ERRORS } from '../constants';
import { logger } from '../middlewares';

const notAllowed = (request: Request, response: Response) => {
    let error: HttpError = createError(404, ERRORS.routNotExist);

    logger.error(`status: ${ 404 }, message: ${ error.message }`);
    response.status(error.status).send({ status: error.status, message: error.message });
};

export const invalidController = { notAllowed };
