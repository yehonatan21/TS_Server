import { model } from "mongoose";
import { IGroupDocument } from "./group.types";
import GroupsSchema from "./group.schema";

export const GroupModel = model<IGroupDocument>("groups", GroupsSchema);