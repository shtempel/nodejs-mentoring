import httpMocks from 'node-mocks-http';

import { usersController } from '../src/controllers';

const TEST_USERS = [
    {
        userId: 'test1',
        login: 'tes1',
        password: 'test1',
        age: 44
    },
    {
        userId: 'test2',
        login: 'test2',
        password: 'test2',
        age: 80
    }
];

describe('users-controller', () => {
    let request: any = null;
    let response: any = null;
    const error = new Error('TEST ERROR');

    jest.mock('./../src/services/user.service.ts', () => ({
        getAllUsers: jest
            .fn()
            .mockImplementationOnce(() => TEST_USERS)
            .mockImplementationOnce(() => { throw error }),
        getUserById: jest.fn(user_id => Promise.resolve(TEST_USERS.find(({ userId }) => user_id === userId))),
        addUser: jest.fn(({ login, password, age }) => Promise.resolve({ id: 'test1', login, password, age })),
        updateUser: jest.fn((user_id, { password, age }) => {
            const user = TEST_USERS.find(({ userId }) => user_id === userId);
            if ( !user ) {
                return Promise.reject('User not found');
            }
            return Promise.resolve({
                userId: user_id,
                login: user.login,
                password,
                age
            })
        }),
        deleteUser: jest.fn(user_id => Promise.resolve(TEST_USERS.find(({ userId }) => user_id === userId)))
    }));

    jest.mock('./../src/controllers/helper.ts');
    jest.mock('./../src/middlewares/logger.ts');
    beforeEach(() => {
        response = httpMocks.createResponse();
    });

    test('should return users', async () => {
        await usersController.getUsers(request, response);
        expect(response._getJSONData()).toEqual(TEST_USERS);
        expect(response.statusCode).toBe(200);
    });

    test('should return user by id', async () => {
        request = { params: { id: 'test1' } };
        await usersController.getUserById(request, response);

        expect(response._getJSONData()).toEqual(TEST_USERS[ 0 ]);
        expect(response.statusCode).toBe(200);
    });

    test('should return correctly add user', async () => {
        const login = 'test3';
        const password = 'test3';
        const age = 33;

        request = { body: { login, password, age } };

        await usersController.addUser(request, response);

        expect(response._getJSONData()).toEqual({
            id: 'test3',
            login,
            password,
            age
        });
        expect(response.statusCode).toBe(201);
    });

    test('should return correct update user', async () => {
        const user_id = 'test1';
        const password = 'test1';
        const age = 44;

        request = { params: { user_id }, body: { password, age } };

        await usersController.updateUser(request, response);

        expect(response._getJSONData()).toEqual({
            id: user_id,
            login: 'test122',
            password,
            age
        });
        expect(response.statusCode).toBe(200);
    });

});
