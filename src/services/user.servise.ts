import uuid from 'uuid';

import { userDAL } from '../data-access';
import { userToDb } from '../data-access/users.parser';
import { UserToAdd, UserToResponse, UserToUpdate } from '../interfaces/typings';

const getAllUsers = (query: { login?: string, limit?: string, offset?: string }): Promise<UserToResponse[]> => userDAL.getAll(query);

const getUserById = (userId: string): Promise<UserToResponse> => userDAL.getUser(userId);

const addUser = (newUser: UserToAdd): Promise<void> => userDAL.insertUser(userToDb(newUser, uuid.v1().toString()));

const updateUser = (userId: string, userToUpdate: UserToUpdate): Promise<void> => userDAL.updateUser(userId, userToUpdate);

const deleteUser = (userId: string) => userDAL.deleteUser(userId);

export const userService = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
};
