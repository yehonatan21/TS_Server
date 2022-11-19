import { Document, Model } from "mongoose";

export interface IGroup {

    name: string;
    dateOfEntry?: Date;
}

export interface IGroupDocument extends IGroup, Document {}

export interface IGroupModel extends Model<IGroupDocument> {}