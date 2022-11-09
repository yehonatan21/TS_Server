import { connect, disconnect } from "../database/database";
import { PersonsModel } from './persons.model';
import { IPersonDocument } from "./persons.types";

function create(name: string): string {
    return `${name} person created`
}

async function get(name: string): Promise<IPersonDocument[]> {
    connect();
    return await PersonsModel.find({ firstName: name });
}

async function getAll(): Promise<IPersonDocument[]> {
    connect();
    return await PersonsModel.find({});
}

function update(name: string): string {
    return `${name} person updated`
}

function _delete(name: string): string {
    return `${name} person deleted`
}

disconnect()

export { create, get, getAll, update, _delete }