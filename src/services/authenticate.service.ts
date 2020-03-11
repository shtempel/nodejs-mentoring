import jwt from 'jsonwebtoken';

import { JWT_TOKEN } from '../constants';
import { authenticateDAL } from '../data-access';

const authenticate = async (login: string, password: string): Promise<string> => {
    const user = await authenticateDAL.authenticate(login, password);

    let payload = { 'user_id': user.user_id, 'isActive': true };

    return jwt.sign(payload, JWT_TOKEN, { expiresIn: 60 });
};

export const authenticateService = { authenticate };
