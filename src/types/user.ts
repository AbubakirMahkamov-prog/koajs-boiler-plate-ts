export interface UserCreate {
    userName: string;
    firstName: string;
    lastName: string;
    password: string
}

export interface UserLogin {
    userName: string;
    password: string;
}