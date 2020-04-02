import { Request, Response } from 'express';
import createError, { HttpError } from 'http-errors';

import { ERRORS } from '../constants';
import { logger } from '../middlewares';

export const getLogMessage = (request: Request): string => {
    const params = `params: ${ JSON.stringify(request.params) }`;
    const body = `body: ${ JSON.stringify(request.body) }`;
    const query = `query: ${ JSON.stringify(request.query) }`;
    const url = `url: ${ request.url }`;
    const method = `method: ${ request.method }`;

    return `${ method } ${ url } ${ params } ${ query } ${ body }`;
};

export const requestHelper = async (fn: any, response: Response, request: Request) => {
    try {
        const data = await fn();

        return data
            ? response.send({ data, status: 'success' })
            : response.send({ status: 'success' });
    } catch (error) {
        logger.error(`status: ${ error.status || 500 }, message: ${ error.message }, ${ getLogMessage(request) }`);
        response.status(error.status || 500).send({ error: { message: error.message } });
    }
};

export const notAllowed = (request: Request, response: Response) => {
    let error: HttpError = createError(405, ERRORS.methodNotAllowed);
    logger.error(`status: ${ 405 }, message: ${ error.message }`);

    response.status(error.status).send({ status: error.status, message: error.message });
};
