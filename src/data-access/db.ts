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

export const dbConnect = () =>
    sequelize
        .sync({ force: true })
        .then(() => console.log(LOG_MESSAGES.connectionSuccess))
        .then(async () => {
            await User.bulkCreate(users);
            await Group.bulkCreate(groups);
            await UserGroup.bulkCreate(userGroups);
        })
        .catch(error => console.error(LOG_MESSAGES.connectionFailed, error));
