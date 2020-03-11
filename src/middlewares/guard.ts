import { NextFunction, Response, Request } from 'express';
import jwt from 'jsonwebtoken';

import { ERRORS, JWT_TOKEN } from '../constants';
import { logger } from './logger';

interface DecodedToken {
    user_id: string;
    isActive: boolean;
    iat: number;
    exp: number;
}

export const checkToken = (request: Request, response: Response, next: NextFunction) => {
    let token = request.headers.authorization as string;

    if ( request.url === '/auth' ) {
        next();
        return;
    }

    if ( token ) {
        jwt.verify(token, JWT_TOKEN, error => {
            if ( error ) {
                logger.error(`status: ${ 401 }, message: ${ ERRORS.badToken }`);
                response.status(401).json({ success: false, message: ERRORS.badToken });
            } else {
                response.locals.user_id = decodeToken(token).user_id;
                next();
            }
        });
    } else {
        logger.error(`status: ${ 403 }, message: ${ ERRORS.noToken }`);
        response.status(403).send({ success: false, message: ERRORS.noToken });
    }
};

const decodeToken = (token: string): DecodedToken => <DecodedToken>jwt.decode(token);
