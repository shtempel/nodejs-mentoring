import { Sequelize } from 'sequelize-typescript';
import { logger } from '../middlewares/logger';
import { Group } from '../models/group.model';
import { User } from '../models/user.model';

import { users, groups } from './backup';
import { LOG_MESSAGES } from '../constants';
import { models } from '../models';
import dbConfig from './../../config/config';

const sequelize = new Sequelize(
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
        await User.bulkCreate(users);
        await Group.bulkCreate(groups);
        logger.info('Database restoring complete!');
    }
    catch (e) {
        throw e;
    }
    // return sequelize
    //     .sync({ force: true })
    //     .then(() => console.log(LOG_MESSAGES.connectionSuccess))
    //     .then(() => users.forEach(user => userToDb(user, user.user_id).save()))
    //     .catch(error => console.error(LOG_MESSAGES.connectionFailed, error));
};
