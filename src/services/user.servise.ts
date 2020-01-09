import uuid from 'uuid';

import { userDAL } from '../dto';
import { User, UserToAdd, UserToResponse, UserToUpdate } from '../interfaces/typings';

const getAllUsers = (query: { login?: string, limit?: string, offset?: string }): Promise<UserToResponse[]> => userDAL.getAll(query);

const getUserById = (userId: string): Promise<User | undefined> => userDAL.getUser(userId);

const addUser = (newUser: UserToAdd) => userDAL.insertUser(newUser, uuid.v1().toString());

const updateUser = (userId: string, userToUpdate: UserToUpdate) => userDAL.updateUser(userId, userToUpdate);

const deleteUser = (userId: string) => userDAL.deleteUser(userId);

export const userService = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
};
