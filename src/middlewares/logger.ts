import { createLogger, transports, format } from 'winston'
import { TransformableInfo } from 'logform';

import { LOG_DIRNAME } from './constants';

const LOG_FILE_MAX_SIZE: number = 5000;

const { colorize, combine, printf, timestamp } = format;
const formatter = printf(({ level, message, timestamp }: TransformableInfo): string => `${ timestamp } [${ level }]: ${ message }`);

const consoleTransport = new transports.Console({ format: combine(colorize(), timestamp(), formatter) });
const errorTransport = new transports.File({ dirname: LOG_DIRNAME, filename: 'errors.log', level: 'error', maxsize: LOG_FILE_MAX_SIZE });
const warnTransport = new transports.File({ dirname: LOG_DIRNAME, filename: 'warnings.log', level: 'warn', maxsize: LOG_FILE_MAX_SIZE });
const infoTransport = new transports.File({ dirname: LOG_DIRNAME, filename: 'info.log', level: 'info', maxsize: LOG_FILE_MAX_SIZE });

export const logger = createLogger({
    exitOnError: false,
    format: combine(timestamp(), formatter),
    transports: [
        consoleTransport,
        errorTransport,
        infoTransport,
        warnTransport
    ]
});
