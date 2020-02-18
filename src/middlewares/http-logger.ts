import { NextFunction, Request, Response } from 'express';

import { logger } from './logger';

export default (request: Request, response: Response, next: NextFunction) => {
    const params = `params: ${ JSON.stringify(request.params) }`;
    const body = `body: ${ JSON.stringify(request.body) }`;
    const query = `query: ${ JSON.stringify(request.query) }`;
    const url = `url: ${ request.url }`;
    const method = `method: ${ request.method }`;

    try {
        const start: number = new Date().getTime();
        let executionTime: string;
        request.on('close', () => {
            executionTime = `executionTime: ${ new Date().getTime() - start } mls`;
            logger.info(`${ method } ${ url } ${ params } ${ query } ${ body } ${ executionTime }`)
        });
    } catch (error) { logger.error(error) }

    next();
};
