import express, { Application } from 'express';

import { LOG_MESSAGES, PORT } from './constants';
import { dbConnect } from './data-access';
import { httpLogger, logger, processUnhandledError } from './middlewares';
import rootRouter from './routes';

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
