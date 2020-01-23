import { Response } from 'express';

export const requestHelper = async (fn: any, response: Response) => {
    try {
        const data = await fn();
        return data
            ? response.send({ data, status: 'success' })
            : response.send({ status: 'success' });
    } catch (error) {
        response.status(error.status || 500).send({ error: { message: error.message } });
    }
};
