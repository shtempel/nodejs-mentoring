import { Op, WhereOptions } from 'sequelize';
import createError from 'http-errors';

import { ERRORS } from '../../constants';
import { UserToResponse, UserToUpdate } from '../../interfaces/typings';
import { User } from '../../models';
import { usersToResponse, userToResponse } from '../../middlewares';
import { QueryParams } from '../typings';

const ENTITY_NAME: string = 'user';
const DEFAULT_OFFSET: number = 0;
const DEFAULT_LIMIT: number = 10;

const getAll = async (params: QueryParams): Promise<UserToResponse[]> => {
    const { login, offsetParam, limitParam } = params;
    const offset: number = offsetParam && parseInt(offsetParam, 10) || DEFAULT_OFFSET;
    const limit: number = limitParam && parseInt(limitParam, 10) + offset || DEFAULT_LIMIT;
    const where: WhereOptions = login ? { login: { [ Op.iLike ]: `%${ login }%` } } : {};
    const users: User[] = await User.findAll({ offset: offset, limit: limit, where });

    return usersToResponse(users);
};

const getUser = async (user_id: string): Promise<UserToResponse> => {
    const user: User = await User.findOne({ where: { user_id: user_id } });

    if ( !user ) throw createError(404, { message: `${ ENTITY_NAME } ${ ERRORS.notFound }` });

    return userToResponse(user);
};

const insertUser = async (userModel: User): Promise<void> => {
    const user: User = await User.findOne({ where: { login: userModel.login } });

    if ( user ) throw createError(400, { message: `${ ENTITY_NAME } ${ ERRORS.exist }` });

    userModel.save();
};

const updateUser = async (user_id: string, userToUpdate: UserToUpdate): Promise<void> => {
    const user: User = await User.findOne({ where: { user_id: user_id } });

    if ( !user ) throw createError(404, { message: `${ ENTITY_NAME } ${ ERRORS.notFound }` });

    user.login = userToUpdate.login;
    user.age = userToUpdate.age;

    user.save();
};

const deleteUser = async (user_id: string): Promise<void> => {
    const user: User = await User.findOne({ where: { user_id: user_id } });

    if ( !user ) throw createError(404, { message: `${ ENTITY_NAME } ${ ERRORS.notFound }` });

    user.destroy();
};

export const userDAL = {
    getAll,
    getUser,
    insertUser,
    updateUser,
    deleteUser
};
