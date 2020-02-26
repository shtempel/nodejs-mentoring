import createError from 'http-errors';
import { WhereOptions, Op } from 'sequelize';

import { ERRORS } from '../../constants';
import { UserToResponse, UserToUpdate } from '../../interfaces/typings';
import { QueryParams } from '../typings';
import { usersToResponse, userToResponse } from '../users.parser';
import { User as UserModel } from '../../models/user.model';

const DEFAULT_OFFSET: number = 0;
const DEFAULT_LIMIT: number = 20;

const getAll = async (params: QueryParams): Promise<UserToResponse[]> => {
    const { login, offsetParam, limitParam } = params;
    const offset: number = offsetParam && parseInt(offsetParam, 10) || DEFAULT_OFFSET;
    const limit: number = limitParam && parseInt(limitParam, 10) + offset || DEFAULT_LIMIT;
    const where: WhereOptions = login ? { loginname: { [ Op.iLike ]: `%${ login }%` } } : {};
    const users = await UserModel.findAll({ offset: offset, limit: limit, where });

    return usersToResponse(users);
};

const getUser = async (user_id: string): Promise<UserToResponse> => {
    const user = await UserModel.findOne({ where: { user_id: user_id } });

    if ( !user ) throw createError(404, { message: ERRORS.userNotFound });

    return userToResponse(user);
};

const insertUser = async (userModel: UserModel): Promise<void> => {
    const user = await UserModel.findOne({ where: { login: userModel.login } });

    if ( user ) throw createError(400, { message: ERRORS.userExist });

    userModel.save();
};

const updateUser = async (user_id: string, userToUpdate: UserToUpdate): Promise<void> => {
    const user = await UserModel.findOne({ where: { user_id: user_id } });

    if ( !user ) throw createError(404, { message: ERRORS.userNotFound });

    user.login = userToUpdate.login;
    user.age = userToUpdate.age;

    user.save();
};

const deleteUser = async (user_id: string): Promise<void> => {
    const user = await UserModel.findOne({ where: { user_id: user_id } });

    if ( !user ) throw createError(404, { message: ERRORS.userNotFound });

    user.destroy();
};

export const userDAL = {
    getAll,
    getUser,
    insertUser,
    updateUser,
    deleteUser
};
