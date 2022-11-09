import { Document, Model } from "mongoose";

export interface IGroup {

    firstName: string;
    lastName: string;
    age?: number;
    email?: string,
    dateOfEntry: Date;
}

export interface IGroupDocument extends IGroup, Document {}

export interface IGroupModel extends Model<IGroupDocument> {}