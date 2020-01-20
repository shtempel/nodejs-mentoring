import { DbUser, UserToResponse, UserToAdd } from '../interfaces/typings';
import { User as UserModel } from './../models/user.model';

export const userToResponse = (user: DbUser): UserToResponse => ({
    userId: user.user_id,
    login: user.loginname,
    age: user.age
});

export const usersToResponse = (users: DbUser[]): UserToResponse[] => users.map(user => userToResponse(user));

export const userToDb = (user: UserToAdd, userId: string): UserModel =>
    new UserModel({
        user_id: userId,
        loginname: user.login,
        age: user.age,
        password: user.password
    });
