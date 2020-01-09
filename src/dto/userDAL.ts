import { ERRORS } from '../constants';
import { User, UserToAdd, UserToResponse, UserToUpdate } from '../interfaces/typings';
import { usersParser } from '../services/users.parser';
import { DTO_CONSTANTS } from './constants';
import { getDbInstance } from './db';
import { getUsersBySubstring } from './dal.helpers';

const dbInstance = getDbInstance();
const IS_DELETED: boolean = false;
const DEFAULT_START: number = 0;
const DEFAULT_END: number = 10;

const getAll = async (params: { login?: string, limit?: string, offset?: string }): Promise<UserToResponse[]> => {
    const { login, limit, offset } = params;
    const users = usersParser(await dbInstance.getCollection(DTO_CONSTANTS.users));
    const start: number = offset && parseInt(offset, 10) || DEFAULT_START;
    const end: number = limit && parseInt(limit, 10) + start || DEFAULT_END;

    return login
        ? getUsersBySubstring(users, login).slice(start, end)
        : users.slice(start, end);
};

const getUser = async (userId: string): Promise<User | undefined> => {
    const collection: User[] = await dbInstance.getCollection(DTO_CONSTANTS.users).then(users => users.filter(user => !user.isDeleted));

    return await collection.find((collectionItem: User): boolean => collectionItem.id === userId) || undefined;
};

const insertUser = async (newUser: UserToAdd, id: string) => {
    const collection: User[] = await dbInstance.getCollection(DTO_CONSTANTS.users);

    if ( collection.some(existingUser => existingUser.login.toLowerCase() === newUser.login.toLowerCase()) ) {
        throw new Error(`${ newUser.login } ${ ERRORS.userExist }`);
    }

    collection.push({
        id: id,
        login: newUser.login,
        password: newUser.password,
        age: newUser.age,
        isDeleted: IS_DELETED
    });
};

const updateUser = async (userId: string, userToUpdate: UserToUpdate) => {
    const collection: User[] = await dbInstance.getCollection(DTO_CONSTANTS.users);
    const user: User | undefined = collection.find(collectionItem => collectionItem.id === userId);

    if ( !user ) {
        throw new Error(ERRORS.userNotFound);
    } else {
        Object.assign(user, userToUpdate);
    }
};

const deleteUser = async (userId: string) => {
    const collection: User[] = await dbInstance.getCollection(DTO_CONSTANTS.users);
    const user: User | undefined = collection.find(collectionItem => collectionItem.id === userId);

    if ( user && user.isDeleted || !user ) {
        throw new Error(ERRORS.userNotFound);
    } else {
        user.isDeleted = true;
    }
};

export const userDAL = {
    getAll,
    getUser,
    insertUser,
    updateUser,
    deleteUser
};
