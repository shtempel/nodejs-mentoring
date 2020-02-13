import uuid from 'uuid';

import { groupDAL, QueryParams } from '../data-access';
import { Group, GroupToDb, GroupToUpdate } from '../interfaces/typings';
import { groupToDb } from '../middlewares';
import { usersGroupService } from './users-group.servise';

const getAllGroups = (query: QueryParams): Promise<Group[]> =>
    groupDAL.getAll(query);

const getGroupById = (group_id: string): Promise<Group> =>
    groupDAL.getGroup(group_id);

const addGroup = (newGroup: GroupToDb): Promise<void> =>
    groupDAL.insertGroup(groupToDb(newGroup, uuid.v1().toString()));

const updateGroup = (group_id: string, groupToUpdate: GroupToUpdate): Promise<void> =>
    groupDAL.updateGroup(group_id, groupToUpdate);

const deleteGroup = (group_id: string): Promise<void> =>
    groupDAL.deleteGroup(group_id);

const addUsersToGroup = usersGroupService.addUsersToGroup;

export const groupService = {
    getAllGroups,
    getGroupById,
    addGroup,
    updateGroup,
    deleteGroup,
    addUsersToGroup
};
