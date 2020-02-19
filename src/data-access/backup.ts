import uuid from 'uuid';

import { User } from '../interfaces/typings';
import { PermissionsType } from '../models';

export const users: User[] = [
    {
        user_id: 'anakin',
        login: 'AnakinSkywalker',
        password: 'anakinpass',
        age: 32
    },
    {
        user_id: 'maceWindu',
        login: 'MaceWindu',
        password: 'macepass',
        age: 72
    },
    {
        user_id: 'lukeSkywalker',
        login: 'LukeSkywalker',
        password: 'lukepass',
        age: 23
    },
    {
        user_id: 'c3p0',
        login: 'C-3PO',
        password: 'c3p0pass',
        age: 32
    },
    {
        user_id: 'darthMaul',
        login: 'DarthMaul',
        password: 'darthpass',
        age: 44
    },
    {
        user_id: uuid.v1().toString(),
        login: 'QuiGonJinn',
        password: 'quipass',
        age: 80
    },
    {
        user_id: uuid.v1().toString(),
        login: 'ObiWanKenobi',
        password: 'obipass',
        age: 47
    },
    {
        user_id: 'palpatine',
        login: 'Palpatine',
        password: 'palpatinepass',
        age: 82
    },
    {
        user_id: uuid.v1().toString(),
        login: 'Yoda',
        password: 'yodapass',
        age: 130
    },
    {
        user_id: uuid.v1().toString(),
        login: 'Snoke',
        password: 'snokepass',
        age: 53
    },
    {
        user_id: uuid.v1().toString(),
        login: 'BobaFett',
        password: 'bobapass',
        age: 36
    },
    {
        user_id: uuid.v1().toString(),
        login: 'Chewbacca',
        password: 'chewbaccapass',
        age: 130
    },
    {
        user_id: uuid.v1().toString(),
        login: 'HanSolo',
        password: 'hanpass',
        age: 66
    },
    {
        user_id: uuid.v1().toString(),
        login: 'KyloRen',
        password: 'kylopass',
        age: 30
    },
    {
        user_id: uuid.v1().toString(),
        login: 'LeiaOrgana',
        password: 'leiapass',
        age: 53
    },
    {
        user_id: uuid.v1().toString(),
        login: 'PadmeAmidala',
        password: 'padmepass',
        age: 27
    },
    {
        user_id: uuid.v1().toString(),
        login: 'CountDooku',
        password: 'dokoopass',
        age: 102
    }
];

export const groups: { group_id: string, name: string, permissions: PermissionsType[] }[] = [
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


export const userGroups: { group_id: string, user_id: string }[] = [
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
