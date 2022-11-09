import { connect, disconnect } from "../database/database";
import { GroupModel } from './group.model';
import { IGroupDocument } from "./group.types";

function create(name: string): string {
    return `${name} group created`
}

async function get(name: string): Promise<IGroupDocument[]> {
    connect();
    return await GroupModel.find({firstName: name});
}

async function getAll(): Promise<IGroupDocument[]> {
    connect();
    return await GroupModel.find({});
}

function update(name: string): string {
    return `${name} group updated`
}

function _delete(name: string): string {
    return `${name} group deleted`
}

disconnect()

export { create, get, getAll, update, _delete }