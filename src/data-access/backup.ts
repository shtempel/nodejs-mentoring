import uuid from 'uuid';
import { genSaltSync, hashSync } from 'bcrypt';

import { Group, User, UsersGroup } from '../interfaces/typings';
import { User as UserModel, Group as GroupModel, UserGroup as UserGroupModel } from '../models';

const SALT = genSaltSync(10);

export const dataBaseRestoring = async () => {
    await UserModel.bulkCreate(users.map(user => ({ ...user, password: hashSync(user.password, SALT) })));
    await GroupModel.bulkCreate(groups);
    await UserGroupModel.bulkCreate(userGroups);
};

export const users: User[] = [

];

export const groups: Group[] = [
    {
        group_id: 'light_side',
        name: 'light_side',
        permissions: [ 'WRITE', 'DELETE' ]
    },
    {
        group_id: 'dark_side',
        name: 'dark_side',
        permissions: [ 'WRITE', 'READ' ]
    }
];

export const userGroups: UsersGroup[] = [
    {
        group_id: 'light_side',
        user_id: 'anakin'
    },
    {
        group_id: 'dark_side',
        user_id: 'palpatine'
    },
    {
        group_id: 'light_side',
        user_id: 'maceWindu'
    },
    {
        group_id: 'light_side',
        user_id: 'lukeSkywalker'
    },
    {
        group_id: 'dark_side',
        user_id: 'anakin'
    },
    {
        group_id: 'dark_side',
        user_id: 'darthMaul'
    }
];
