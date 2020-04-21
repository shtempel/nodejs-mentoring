import express, { Application } from 'express';
import * as cors from 'cors';

import { LOG_MESSAGES, PORT } from './constants';
import { dbConnect } from './data-access';
import { headerSchema, httpLogger, logger, processUnhandledError, validator } from './middlewares';
import { checkToken } from './middlewares/guard';
import rootRouter from './routes';

export const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(checkToken);
app.get('*', validator.headers(headerSchema));
app.use(rootRouter);
app.use(httpLogger);

processUnhandledError();

app.listen(PORT, async () => {
    logger.info(`${ LOG_MESSAGES.portListening } ${ PORT }`);
    try {
        await dbConnect();
    } catch (error) {
        logger.error(error);
        throw error;
    }
});
