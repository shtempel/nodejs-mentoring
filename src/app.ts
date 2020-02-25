import express, { Application } from 'express';

import { LOG_MESSAGES, PORT } from './constants';
import { dbConnect } from './data-access';
import { logger } from './middlewares/logger';
import rootRouter from './routes';
import { ROUTES } from './routes/constants';

const app: Application = express();

app.use(express.json());
app.use(rootRouter);

app.listen(PORT, async () => {
    logger.info(`${ LOG_MESSAGES.portListening } ${ PORT }`);
    try {
        await dbConnect();
    } catch (e) {
        throw e;
    }
});
