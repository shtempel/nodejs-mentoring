import { Sequelize } from 'sequelize-typescript';

import { logger } from '../middlewares/logger';
import { Group, User, UserGroup } from '../models/';
import { users, groups, userGroups } from './backup';
import { LOG_MESSAGES } from '../constants';
import dbConfig from './../../config/config';

const models = [
    User,
    Group,
    UserGroup
];


export const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        define: {
            timestamps: true
        },
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
        logger.info('Database restoring in process...');
        await User.bulkCreate(users);
        await Group.bulkCreate(groups);
        await UserGroup.bulkCreate(userGroups);
        logger.info('Database restoring complete!');
    } catch (error) {
        logger.error({ name: error.name, message: error.message, stack: error.stack });
        throw error;
    }
};
