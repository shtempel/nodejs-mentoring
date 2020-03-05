import { Sequelize } from 'sequelize-typescript';

import { dbConfig } from '../../config/config';
import { logger } from '../middlewares';
import { dataBaseRestoring } from './backup';
import { LOG_MESSAGES } from '../constants';
import { User, Group, UserGroup } from '../models';

const models = [ User, Group, UserGroup ];

export const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        define: { timestamps: true },
        port: dbConfig.port,
        dialect: dbConfig.dialect,
        host: dbConfig.host,
        dialectOptions: { ssl: true },
        pool: dbConfig.pool,
        models: [ ...models ]
    }
);

export const dbConnect = async () => {
    await sequelize.sync({ force: true });
    logger.info(LOG_MESSAGES.connectionSuccess);
    try {
        logger.info(LOG_MESSAGES.dataBaseRestoringInProcess);
        await dataBaseRestoring();
        logger.info(LOG_MESSAGES.dataBaseRestoringComplete);
    } catch (error) {
        logger.error({ name: error.name, message: error.message, stack: error.stack });
    }
};
