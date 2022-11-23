import { findByName } from "../../db/repo/person/person.repo";

export async function checkIfExistInGroup(personName: string, groupName: string): Promise<Boolean> {
    const person = await findByName(personName)
    if (person.groups.includes(groupName)) {
        return true
    } else {
        return false
    }
}

export function createObject(key: string, value: string) {
    const obj: any = {};
    obj[key] = value;
    
    return obj
}