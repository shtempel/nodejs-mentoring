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
