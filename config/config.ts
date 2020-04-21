import 'dotenv/config';
import { Dialect } from 'sequelize';

// dotenv.config();

const { DB_DIALECT, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST } = process.env;

const dialect = DB_DIALECT as Dialect;
const port = parseInt(DB_PORT);

export const dbConfig = {
    dialect: dialect,
    host: DB_HOST,
    port: port,
    database: DB_NAME,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    pool: {
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000
    }
};
