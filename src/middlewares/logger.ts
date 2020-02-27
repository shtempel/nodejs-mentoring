import { createLogger, transports, format } from 'winston'
import { TransformableInfo } from 'logform';
import { FileTransportInstance } from 'winston/lib/winston/transports';

import { LOG_DIRNAME } from './constants';

const LOG_FILE_MAX_SIZE: number = 5000;

const createFileTransport = (filename: string, level: string): FileTransportInstance =>
    new transports.File({ dirname: LOG_DIRNAME, filename, level, maxsize: LOG_FILE_MAX_SIZE });

const { colorize, combine, printf, timestamp } = format;
const formatter = printf(({ level, message, timestamp }: TransformableInfo): string => `${ timestamp } [${ level }]: ${ message }`);

const consoleTransport = new transports.Console({ format: combine(colorize(), timestamp(), formatter) });
const errorTransport = createFileTransport('errors.log', 'error');
const warnTransport = createFileTransport('warnings.log', 'warn');
const infoTransport = createFileTransport('info.log', 'info');

const loggerTransports = [ consoleTransport, errorTransport, infoTransport, warnTransport ];

// Logger instance
export const logger = createLogger({
    exitOnError: false,
    format: combine(timestamp(), formatter),
    transports: loggerTransports
});
