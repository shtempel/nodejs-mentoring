import uuid from 'uuid';

import { User } from '../interfaces/typings';

export const users2: User[] = [
    {
        user_id: 'hueta',
        login: "hueta",
        password: "hueta",
        age: 3
    }
];
export const users: User[] = [
    {
        user_id: 'blablabla',
        login: "AnakinSkywalker",
        password: "anakinpass",
        age: 32
    },
    {
        user_id: uuid.v1().toString(),
        login: "MaceWindu",
        password: "macepass",
        age: 72
    },
    {
        user_id: uuid.v1().toString(),
        login: "C-3PO",
        password: "c3p0pass",
        age: 32
    },
    {
        user_id: uuid.v1().toString(),
        login: "LukeSkywalker",
        password: "lukepass",
        age: 23
    },
    {
        user_id: uuid.v1().toString(),
        login: "DarthMaul",
        password: "darthpass",
        age: 44
    },
    {
        user_id: uuid.v1().toString(),
        login: "QuiGonJinn",
        password: "quipass",
        age: 80
    },
    {
        user_id: uuid.v1().toString(),
        login: "ObiWanKenobi",
        password: "obipass",
        age: 47
    },
    {
        user_id: uuid.v1().toString(),
        login: "Palpatine",
        password: "palpatinepass",
        age: 82
    },
    {
        user_id: uuid.v1().toString(),
        login: "Yoda",
        password: "yodapass",
        age: 130
    },
    {
        user_id: uuid.v1().toString(),
        login: "Snoke",
        password: "snokepass",
        age: 53
    },
    {
        user_id: uuid.v1().toString(),
        login: "BobaFett",
        password: "bobapass",
        age: 36
    },
    {
        user_id: uuid.v1().toString(),
        login: "Chewbacca",
        password: "chewbaccapass",
        age: 130
    },
    {
        user_id: uuid.v1().toString(),
        login: "HanSolo",
        password: "hanpass",
        age: 66
    },
    {
        user_id: uuid.v1().toString(),
        login: "KyloRen",
        password: "kylopass",
        age: 30
    },
    {
        user_id: uuid.v1().toString(),
        login: "LeiaOrgana",
        password: "leiapass",
        age: 53
    },
    {
        user_id: uuid.v1().toString(),
        login: "PadmeAmidala",
        password: "padmepass",
        age: 27
    },
    {
        user_id: uuid.v1().toString(),
        login: "CountDooku",
        password: "dokoopass",
        age: 102
    }
];
