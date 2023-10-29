export interface IUser {
    userUID: string;
    name: string;
    imgUrl: string;
}

export type IUserCollection = Map<string, IUser>;