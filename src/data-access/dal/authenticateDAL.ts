import { compare } from 'bcrypt';
import createError from 'http-errors';
import { Op } from 'sequelize';

import { ERRORS } from '../../constants';
import { UserToResponse } from '../../interfaces/typings';
import { User } from '../../models';

const authenticate = async (login: string, password: string): Promise<UserToResponse> => {
    const user: User = await User.findOne({ where: { [ Op.and ]: { login: login } } });
    const match = await compare(password, user.password);

    if ( !match ) throw createError(403, { message: `${ ERRORS.badLogin }` });

    return user;
};

export const authenticateDAL = { authenticate };
