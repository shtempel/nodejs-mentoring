import 'dotenv/config';

export const PORT = process.env.PORT || 4001;

export const JWT_TOKEN = process.env.JWT_TOKEN;

    export const ERRORS = {
    notFound: 'not found!',
    groupNotFound: 'Group not Found!',
    methodNotAllowed: 'Method not allowed here!',
    exist: 'already exist!',
    routNotExist: 'This route is not exist!',
    badLogin: 'Bad login/password combination!',
    badToken: 'Failed to authenticate token!',
    noToken: 'No token provided!'
};

export const LOG_MESSAGES = {
    connectionSuccess: 'Connection has been established successfully!',
    connectionFailed: 'Unable to connect to the database:',
    portListening: 'Listening on port...',
    dataBaseRestoringInProcess: 'Database restoring in process...',
    dataBaseRestoringComplete: 'Database restoring complete!'
};

