import {ObjectId} from "mongodb";

export interface AccountRecord {
    _id: ObjectId;
    email: string;
    first_name: string;
    last_name: string;
    created_at: Date;
}