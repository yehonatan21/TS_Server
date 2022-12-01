import { findGroupByName } from "../../db/repo/group/group.repo";
import { findPersonByName } from "../../db/repo/person/person.repo";

export async function checkIfExistInGroup(personName: string, groupName: string): Promise<Boolean> {
    const person = await findPersonByName(personName)
    const group = await findGroupByName(groupName)

    if (person.groups.includes(String(group._id))) {
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