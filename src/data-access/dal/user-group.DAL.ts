import { Transaction } from 'sequelize';

import { UsersGroup } from '../../interfaces/typings';
import { Group, UserGroup } from '../../models';
import { sequelize as dbInstance } from '../db';

const addUsersToGroup = (group_id: string, user_ids: string[]): Promise<void> =>
    dbInstance.transaction(
        async (transaction: Transaction) => {
            await Group.findOne({ where: { group_id: group_id }, transaction });

            const groups: UsersGroup[] =
                user_ids.map((userId: string) => ({
                    group_id: group_id,
                    user_id: userId
                }));

            await UserGroup.bulkCreate(groups, { transaction });
            // await group.addUsers(user_ids, { transaction }); just an example of using method defined in model
        }
    );

export const usersGroupDAL = { addUsersToGroup };
