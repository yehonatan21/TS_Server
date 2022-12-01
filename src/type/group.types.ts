import { Document, Model } from "mongoose";

export interface IGroup {
    groupName: string;
    groups: string[],
    persons: string[],
    dateOfEntry?: Date;
}

export interface IGroupDocument extends IGroup, Document { }

export interface IGroupModel extends Model<IGroupDocument> { }