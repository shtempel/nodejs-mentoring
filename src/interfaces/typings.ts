export interface User extends UserToResponse {
    password: string;
}

export interface UserToAdd {
    login: string;
    age: number;
    password: string;
}

export interface UserToResponse {
    userId: string;
    login: string;
    age: number;
}

export interface UserToUpdate {
    age: number;
    login: string;
}

export interface DbUser {
    user_id: string;
    loginname: string;
    password: string;
    age: number;
}
