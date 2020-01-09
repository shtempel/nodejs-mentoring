import { User, UserToResponse } from '../interfaces/typings';

export const userToResponse = (response: User): UserToResponse => ({
    id: response.id,
    login: response.login,
    age: response.age
});

