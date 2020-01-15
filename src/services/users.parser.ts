import { DbUser, UserToResponse, User, UserToAdd } from '../interfaces/typings';

export const userToResponse = (user: DbUser): UserToResponse => ({
    userId: user.user_id,
    login: user.loginname,
    age: user.age
});

export const usersToResponse = (users: DbUser[]): UserToResponse[] => users.map(user => userToResponse(user));

export const userToDb = (user: UserToAdd, userId: string): DbUser => ({
    user_id: userId,
    loginname: user.login,
    age: user.age,
    password: user.password
});
