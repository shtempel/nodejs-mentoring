import express, { Application } from 'express';

import { LOG_MESSAGES, PORT } from './constants';
import { dbConnect } from './data-access/db';
import rootRouter from './routes';

const app: Application = express();

app.use(express.json());
app.use('/', rootRouter);

app.listen(PORT, async () => {
    console.log(`${ LOG_MESSAGES.portListening } ${ PORT }`);
    try {
        await dbConnect();
    } catch (e) {
        throw e;
    }
});
