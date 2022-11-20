import { findByName, addTodb, findAll, deleteById, getGroupsByName } from "../../db/repo/person/person.repo";

export async function checkIfExistInGroup(data): Promise<Boolean> {
    const name = data.firstName
    const person: [String] = await getGroupsByName(name)
    if (person.includes('abc')) { //FIXME: groupName
        return true
    } else {
        return false
    }
}