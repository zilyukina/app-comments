import { Timestamp } from "@angular/fire/firestore";

export interface IComment {
    userUID: string;
    text: string;
    createdAt: Timestamp;
}