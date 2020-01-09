import { UserToResponse } from '../interfaces/typings';

export const getUsersBySubstring = (collection: UserToResponse[], substring?: string) =>
    substring && collection.filter((user: UserToResponse) => user.login.toLowerCase().includes(substring.toLowerCase())) || [];
