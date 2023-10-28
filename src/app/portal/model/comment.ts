import { IUser } from "./user";

export interface ICommment {
    author: IUser;
    text: string;
}