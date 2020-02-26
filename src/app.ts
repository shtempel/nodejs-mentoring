import express, { Application } from 'express';

import { LOG_MESSAGES, PORT } from './constants';
import { dbConnect } from './data-access';
import { processUnhandledError } from './middlewares';
import { logger } from './middlewares/logger';
import rootRouter from './routes';
import httpLogger from './middlewares/http-logger';

const app: Application = express();

app.use(express.json());
app.use(httpLogger);
app.use(rootRouter);

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
