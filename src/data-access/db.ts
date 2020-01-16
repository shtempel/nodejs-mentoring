import { Sequelize } from 'sequelize-typescript';

import { LOG_MESSAGES } from '../constants';
import { models } from '../models';
import dbConfig from './../../config/config';

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        define: {
            timestamps: true,
            paranoid: true
        },
        port: dbConfig.port,
        dialect: dbConfig.dialect,
        host: dbConfig.host,
        dialectOptions: { ssl: true },
        pool: dbConfig.pool,
        models: [ ...models ]
    }
);

export const dbConnect = () => {
    return sequelize
        .sync()
        .then(() => {
            console.log(LOG_MESSAGES.connectionSuccess);
        })
        .catch(error => {
            console.error(LOG_MESSAGES.connectionFailed, error);
        });
};
