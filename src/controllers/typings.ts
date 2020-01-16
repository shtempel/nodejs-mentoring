import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';

export interface AddUserBodySchema extends ValidatedRequestSchema {
    [ ContainerTypes.Body ]: {
        user: {
            login: string;
            age: number;
            password: string;
        }
    }
}

export interface UpdateUserSchema extends ValidatedRequestSchema {
    [ ContainerTypes.Body ]: {
        user: {
            age: number;
            login: string;
        }
    }
}
