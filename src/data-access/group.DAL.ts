import createError from 'http-errors';
import { Op, WhereOptions } from 'sequelize';
import { groupsToResponse, groupToResponse } from '../middlewares/parsers';

import { Group } from '../models/group.model';


const ENTITY_NAME: string = 'group';
const DEFAULT_OFFSET: number = 0;
const DEFAULT_LIMIT: number = 10;

const getAll = async (params: any): Promise<any[]> => {
    const { name, offsetParam, limitParam } = params;
    const offset: number = offsetParam && parseInt(offsetParam, 10) || DEFAULT_OFFSET;
    const limit: number = limitParam && parseInt(limitParam, 10) + offset || DEFAULT_LIMIT;
    const where: WhereOptions = name ? { name: { [ Op.iLike ]: `%${ name }%` } } : {};
    const groups = await Group.findAll({ offset: offset, limit: limit, where });

    return groupsToResponse(groups);
};

const getGroup = async (group_id: string): Promise<any> => {
    const group = await Group.findOne({ where: { group_id: group_id } });

    if ( !group ) throw createError(404, { message: `${ ENTITY_NAME } ERRORS.notFound` });

    return groupToResponse(group);
};

const insertGroup = async (groupModel: Group): Promise<void> => {
    const group = await Group.findOne({ where: { name: groupModel.name } });

    if ( group ) throw createError(400, { message: `${ ENTITY_NAME } ERRORS.exist` });

    groupModel.save();
};

const updateGroup = async (group_id: string, groupToUpdate: any): Promise<void> => {
    const group = await Group.findOne({ where: { group_id: group_id } });

    if ( !group ) throw createError(404, { message: `${ ENTITY_NAME } ERRORS.notFound ` });

    group.name = groupToUpdate.name;
    group.permissions = groupToUpdate.permissions;

    group.save();
};

const deleteGroup = async (group_id: string): Promise<void> => {
    const group = await Group.findOne({ where: { group_id: group_id } });

    if ( !group ) throw createError(404, { message: `${ ENTITY_NAME } ERRORS.notFound` });

    group.destroy();
};

export const groupDAL = {
    getAll,
    getGroup,
    insertGroup,
    updateGroup,
    deleteGroup
};
