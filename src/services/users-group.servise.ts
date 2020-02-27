import { usersGroupDAL } from '../data-access';

const addUsersToGroup = async (group_id: string, user_ids: string[]): Promise<any> =>
    await usersGroupDAL.addUsersToGroup(group_id, user_ids);

export const usersGroupService = { addUsersToGroup };
