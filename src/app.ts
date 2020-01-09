import express, { Application, Router } from 'express';
import rootRouter from './routes';

const app: Application = express();
app.use(express.json());
app.use('/', rootRouter);

export default app;
