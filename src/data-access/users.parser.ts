import { UserToResponse, UserToAdd, User } from '../interfaces/typings';
import { User as UserModel } from './../models/user.model';

export const userToResponse = (user: User): UserToResponse => ({
    user_id: user.user_id,
    login: user.login,
    age: user.age
});

export const usersToResponse = (users: User[]): UserToResponse[] => users.map(user => userToResponse(user));

export const userToDb = (user: UserToAdd, user_id: string): UserModel =>
    new UserModel({
        user_id: user_id,
        login: user.login,
        age: user.age,
        password: user.password
    });
