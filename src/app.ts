import express, { Application } from 'express';

import { PORT } from './constants';
import { dbConnect } from './data-access/db';
import rootRouter from './routes';

const app: Application = express();
app.use(express.json());
app.use('/', rootRouter);

(async () => {
    await dbConnect();
    app.listen(PORT, () => console.log(`Listening on port ${ PORT }`));
})();
