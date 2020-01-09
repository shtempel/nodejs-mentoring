import uuid from 'uuid';
import { User } from '../interfaces/typings';

interface DataBase {
    db: {
        [ key: string ]: User[]
    };
    getCollection: (collection: string) => Promise<any[]>;
}

export const getDbInstance = (): DataBase => DB;

const getDbCollection = async (collection: string): Promise<any[]> => getDbInstance().db[ collection ];

const DB: DataBase = {
    getCollection: getDbCollection,
    db: {
        [ 'users' ]: [
            {
                id: uuid.v1(),
                login: 'Jake',
                password: 'ewq',
                age: 35,
                isDeleted: false
            },
            {
                id: '123',
                login: 'Kit',
                password: 'qwe',
                age: 35,
                isDeleted: true
            },
            {
                id: uuid.v1(),
                login: 'Nik',
                password: 'qwe',
                age: 35,
                isDeleted: false
            },
            {
                id: uuid.v1(),
                login: 'Bruce',
                password: 'qwe',
                age: 35,
                isDeleted: false
            },
            {
                id: uuid.v1(),
                login: 'John',
                password: 'qwe',
                age: 35,
                isDeleted: true
            },
            {
                id: uuid.v1(),
                login: 'Mike',
                password: 'qwe',
                age: 35,
                isDeleted: false
            }
        ]
    }
};

