import { UsersGroup } from '../../interfaces/typings';
import { UserGroup } from '../../models';

const addUsersToGroup = async (group_id: string, user_ids: string[]): Promise<void> => {
    const groups: UsersGroup[] =
        user_ids.map((userId: string) => ({
            group_id: group_id,
            user_id: userId
        }));

    await UserGroup.bulkCreate(groups);
};

export const usersGroupDAL = { addUsersToGroup };
