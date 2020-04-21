import { genSaltSync, hashSync } from 'bcrypt';
import { Group, GroupToDb, User, UserToAdd, UserToResponse } from '../interfaces/typings';
import { User as UserModel } from '../models/user.model';
import { Group as GroupModel } from './../models/group.model';

const SALT = genSaltSync(10);

export const groupToResponse = (group: Group): Group => ({
    group_id: group.group_id,
    name: group.name,
    permissions: group.permissions
});

export const groupsToResponse = (groups: Group[]): Group[] => groups.map(group => groupToResponse(group));

export const groupToDb = (group: GroupToDb, group_id: string) =>
    new GroupModel({
        group_id: group_id,
        name: group.name,
        permissions: group.permissions
    });

export const userToResponse = (user: User): UserToResponse => ({
    user_id: user.user_id,
    login: user.login,
    age: user.age
});

export const usersToResponse = (users: User[]): UserToResponse[] => users.map(user => userToResponse(user));

export const userToDb = (user: UserToAdd, user_id: string): UserModel => {
    return new UserModel({
        user_id: user_id,
        login: user.login,
        age: user.age,
        password: hashSync(user.password, SALT)
    });
};
