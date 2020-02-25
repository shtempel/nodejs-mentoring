import uuid from 'uuid';

import { QueryParams } from '../data-access';
import { groupDAL } from '../data-access/group.DAL';
import { groupToDb } from '../middlewares/parsers';


const getAllGroups = (query: QueryParams): Promise<any[]> =>
    groupDAL.getAll(query);

const getGroupById = (group_id: string): Promise<any> =>
    groupDAL.getGroup(group_id);

const addGroup = (newGroup: any): Promise<void> =>
    groupDAL.insertGroup(groupToDb(newGroup, uuid.v1().toString()));

const updateGroup = (group_id: string, groupToUpdate: any): Promise<void> =>
    groupDAL.updateGroup(group_id, groupToUpdate);

const deleteGroup = (group_id: string): Promise<void> =>
    groupDAL.deleteGroup(group_id);

export const groupService = {
    getAllGroups,
    getGroupById,
    addGroup,
    updateGroup,
    deleteGroup
};
