import { HANDLE } from './constants';
import { logger } from './logger';

export const processUnhandledError = () => {
    process
        .on('unhandledRejection', (reason: number, promise: Promise<any>) => {
            logger.error(`${ HANDLE[ 'unhandledRejection' ].message }: ${ JSON.stringify(promise) }, reason: ${ reason }`);
            process.exit(1);
        })
        .on('uncaughtException', (error: Error) => {
            logger.error(`${ HANDLE[ 'uncaughtException' ].message } - ${ error }`);
            process.exit(1);
        });
};
