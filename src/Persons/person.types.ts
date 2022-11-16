import { Document, Model } from "mongoose";

export interface IPerson {

    firstName: string;
    lastName: string;
    age?: number;
    email?: string,
    dateOfEntry: Date;
}

export interface IPersonDocument extends IPerson, Document {}

export interface IPersonModel extends Model<IPersonDocument> {}