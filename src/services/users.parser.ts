import { User, UserToResponse } from '../interfaces/typings';

export const usersParser = (users: User[]): UserToResponse[] => {
    return users
        .filter(user => !user.isDeleted).map(user => ({
            id: user.id,
            login: user.login,
            age: user.age
        }))
};
