import * as Joi from '@hapi/joi';
import { createValidator } from 'express-joi-validation';

const MIN_AGE = 4;
const MAX_AGE = 130;

export const validator = createValidator();

export const addUserBodySchema = Joi.object({
    login: Joi.string().required(),
    age: Joi.number().required().greater(MIN_AGE).less(MAX_AGE),
    password: Joi.string().required().alphanum()
});

export const updateUserBodySchema = Joi.object({
    login: Joi.string().required(),
    age: Joi.number().required().greater(MIN_AGE).less(MAX_AGE)
});

export const updateUserQuerySchema = Joi.object({
    user_id: Joi.string().required()
});
