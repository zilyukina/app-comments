import { Timestamp } from "@angular/fire/firestore";

export interface ICommment {
    userUID: string;
    text: string;
    createdAt: Timestamp;
}