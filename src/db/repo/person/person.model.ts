import { model } from "mongoose";
import { IPersonDocument } from "../../../type/person.types";
import PersonsSchema from "./person.schema";

export const PersonsModel = model<IPersonDocument>("persons", PersonsSchema)