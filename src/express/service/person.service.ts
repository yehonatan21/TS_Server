import { findByName, addTodb, findAll, deleteById } from "../../db/repo/person/person.repo";

export async function checkIfExistInGroup(personName: string, groupName: string): Promise<Boolean> {
    const person = await findByName(personName)
    if (person.groups.includes(groupName)) {
        return true
    } else {
        return false
    }
}

export function createObject(key, value){
    const obj: any = {};

    obj[key] = value;
    // console.log(obj)
    return obj
}