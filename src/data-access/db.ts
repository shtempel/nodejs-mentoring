import { Sequelize } from 'sequelize-typescript';

import { groups, userGroups, users } from './backup';
import { LOG_MESSAGES } from '../constants';
import { User, Group, UserGroup } from '../models';
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

export const dbConnect = async () => {
    await sequelize.sync({ force: true });
    console.log(LOG_MESSAGES.connectionSuccess);
    try {
        console.log('Database restoring in process...');
        await User.bulkCreate(users);
        await Group.bulkCreate(groups);
        await UserGroup.bulkCreate(userGroups);
        console.log('Database restoring complete!');
    } catch (error) {
        console.error({ name: error.name, message: error.message, stack: error.stack });
    }
};
