import express, { Application } from 'express';

import { PORT } from './constants';
import rootRouter from './routes';

const app: Application = express();
app.use(express.json());
app.use('/', rootRouter);
app.listen(PORT, () => console.log(`Listening on port ${ PORT }`));
