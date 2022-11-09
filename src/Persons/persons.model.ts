import { model } from "mongoose";
import { IPersonDocument } from "./persons.types";
import PersonsSchema from "./persons.schema";

export const PersonsModel = model<IPersonDocument>("persons", PersonsSchema)