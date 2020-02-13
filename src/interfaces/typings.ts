import { PermissionsType } from '../models/group.model';

// Users
export interface User extends UserToResponse {
    password: string;
}

export interface UserToAdd {
    login: string;
    age: number;
    password: string;
}

export interface UserToResponse {
    user_id: string;
    login: string;
    age: number;
}

export interface UserToUpdate {
    age: number;
    login: string;
}

// Groups
export interface Group {
    group_id: string;
    name: string;
    permissions: PermissionsType[];
}

export interface GroupToUpdate {
    name: string;
    permissions: PermissionsType[];
}

export interface GroupToDb extends GroupToUpdate {}

// UsersGroup

export interface UsersGroup {
    group_id: string;
    user_id: string;
}
