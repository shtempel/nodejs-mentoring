export const LOG_DIRNAME: string = 'logs';

export const HANDLE: { [ key: string ]: { message: string; } } = {
    [ 'unhandledRejection' ]: {
        message: 'Unhandled Rejection at'
    },
    [ 'uncaughtException' ]: {
        message: 'Uncaught Exception thrown'
    }
};
