import * as Joi from '@hapi/joi';
import { createValidator } from 'express-joi-validation';

const MIN_AGE = 4;
const MAX_AGE = 130;

export const validator = createValidator();

export const headerSchema = Joi.object({
    authorization: Joi.string().required()
});

export const addUserBodySchema = Joi.object({
    login: Joi.string().required(),
    age: Joi.number().greater(MIN_AGE).less(MAX_AGE).required(),
    password: Joi.string().alphanum().required()
});

export const updateUserBodySchema = Joi.object({
    login: Joi.string().required(),
    age: Joi.number().greater(MIN_AGE).less(MAX_AGE).required()
});

export const updateUserQuerySchema = Joi.object({
    user_id: Joi.string().required()
});

export const addGroupBodySchema = Joi.object({
    name: Joi.string().required(),
    permissions: Joi.array().items(Joi.string()).required()
});

export const updateGroupQuerySchema = Joi.object({
    group_id: Joi.string().required()
});

export const updateGroupBodySchema = Joi.object({
    name: Joi.string().required(),
    permissions: Joi.array().items(Joi.string()).required()
});

export const addUsersToGroupQuerySchema = Joi.object({
    group_id: Joi.string().required()
});

export const addUsersToGroupBodySchema = Joi.object({
    userIds: Joi.array().items(Joi.string()).required()
});

export const authBodySchema = Joi.object({
    login: Joi.string().required(),
    password: Joi.string().alphanum().required()
});
