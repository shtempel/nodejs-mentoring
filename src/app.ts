import express, { Application } from 'express';

import { PORT } from './constants';
import { dbConnect } from './data-access/db';
import rootRouter from './routes';

const app: Application = express();

app.use(express.json());
app.use('/', rootRouter);

app.listen(PORT, async () => {
    console.log(`Listening on port ${ PORT }`);
    try {
        await dbConnect();
    } catch (e) {
       throw e;
    }
});
