export interface User extends UserToResponse {
    password: string;
    isDeleted: boolean;
}
export interface UserToAdd {
    login: string;
    age: number;
    password: string;
}

export interface UserToResponse {
    id: string;
    login: string;
    age: number;
}

export interface UserToUpdate {
    age: number;
    login: string;
}
