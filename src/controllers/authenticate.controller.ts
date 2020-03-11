import { Request, Response } from 'express';

import { authenticateService } from '../services';
import { requestHelper } from './helper';

const authenticate = (request: Request, response: Response) =>
    requestHelper(() => authenticateService.authenticate(request.body.login, request.body.password), response, request);

export const authenticateController = { authenticate };
