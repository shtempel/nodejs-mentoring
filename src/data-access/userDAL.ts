import { WhereOptions, Op } from 'sequelize';

import { ERRORS } from '../constants';
import { UserToAdd, UserToResponse, UserToUpdate } from '../interfaces/typings';
import { usersToResponse, userToDb, userToResponse } from '../services/users.parser';
import { User as UserModel } from './../models/user.model';

const DEFAULT_OFFSET: number = 0;
const DEFAULT_LIMIT: number = 10;

const getAll = (params: { login?: string, limitParam?: string, offsetParam?: string }): Promise<UserToResponse[]> => {
    const { login, offsetParam, limitParam } = params;
    const offset: number = offsetParam && parseInt(offsetParam, 10) || DEFAULT_OFFSET;
    const limit: number = limitParam && parseInt(limitParam, 10) + offset || DEFAULT_LIMIT;
    const where: WhereOptions = login ? { loginname: { [ Op.iLike ]: `%${ login }%` } } : {};

    return UserModel
        .findAll({ offset: offset, limit: limit, where })
        .then(users => usersToResponse(users));
};

const getUser = (userId: string): Promise<UserToResponse> =>
    UserModel
        .findOne({ where: { user_id: userId } })
        .then(user => user ? userToResponse(user) : null);

const insertUser = (newUser: UserToAdd, userId: string) =>
    UserModel
        .findOne({ where: { loginname: newUser.login } })
        .then(user => {
            if ( user ) {
                throw new Error(`${ newUser.login } ${ ERRORS.userExist }`);
            } else {
                new UserModel(userToDb(newUser, userId)).save()
            }
        });

const updateUser = (userId: string, userToUpdate: UserToUpdate) =>
    UserModel
        .findOne({ where: { user_id: userId } })
        .then(user => {
            user.loginname = userToUpdate.login;
            user.age = userToUpdate.age;

            return user.save();
        });

const deleteUser = async (userId: string) =>
    UserModel
        .findOne({ where: { user_id: userId } })
        .then(user => {
            if ( !user ) { throw new Error(ERRORS.userNotFound); }
            return user.destroy();
        });

export const userDAL = {
    getAll,
    getUser,
    insertUser,
    updateUser,
    deleteUser
};
