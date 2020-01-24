import uuid from 'uuid';

import { QueryParams, userDAL } from '../data-access';
import { UserToAdd, UserToResponse, UserToUpdate } from '../interfaces/typings';
import { userToDb } from '../middlewares';

const getAllUsers = (query: QueryParams): Promise<UserToResponse[]> => userDAL.getAll(query);

const getUserById = (user_id: string): Promise<UserToResponse> => userDAL.getUser(user_id);

const addUser = (newUser: UserToAdd): Promise<void> => userDAL.insertUser(userToDb(newUser, uuid.v1().toString()));

const updateUser = (user_id: string, userToUpdate: UserToUpdate): Promise<void> => userDAL.updateUser(user_id, userToUpdate);

const deleteUser = (user_id: string) => userDAL.deleteUser(user_id);

export const userService = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
};
