import express, { Application } from 'express';

import { LOG_MESSAGES, PORT } from './constants';
import { dbConnect } from './data-access';
import rootRouter from './routes';
import { ROUTES } from './routes/constants';

const app: Application = express();

app.use(express.json());
app.use(ROUTES.userRoutes.root, rootRouter);

app.listen(PORT, async () => {
    console.log(`${ LOG_MESSAGES.portListening } ${ PORT }`);
    try {
        await dbConnect();
    } catch (e) {
        throw e;
    }
});
