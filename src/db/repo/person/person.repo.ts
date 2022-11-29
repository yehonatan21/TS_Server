import { IPersonDocument } from '../../../type/person.types'
import { PersonsModel } from './person.model'
import { addPersonToGroup, findGroupByName, removePersonFromGroup } from '../group/group.repo'

export async function createPerson(data) {
    await PersonsModel.create(data)
    console.log(data.firstName + ' created.')
}

export async function findPersonByName(name: String): Promise<IPersonDocument> {
    return await PersonsModel.findOne({ firstName: name }).lean()
}

export async function findAll(): Promise<[IPersonDocument]> {
    return await PersonsModel.find().lean()
}

export async function deleteByName(name: object) {
    return await PersonsModel.deleteOne(name)
}

export async function addToGroup(personName: string, groupName: string) {
    const personID = await (await findPersonByName(personName))._id
    const groupID = await (await findGroupByName(groupName))._id
    const groupExist = await addPersonToGroup(personID, groupID)

    if (groupExist) {
        await PersonsModel.updateOne(
            { _id: personID },
            { $push: { groups: groupID } },
        );
        return `${personName} added to group ${groupName}`
    } else {
        return 'Group not exist'
    }
}

export async function removeFromGroup(personName: string, groupName: string) {
    const personID = await (await findPersonByName(personName))._id
    const groupExist = await removePersonFromGroup(personID, groupName)

    if (groupExist) {
        await PersonsModel.updateOne(
            { firstName: personName },
            { $pull: { groups: groupName } },
        );
        return `${personName} removed from ${groupName}`
    } else {
        return 'Group not exist'
    }
}

export async function updateByName(filter: object, update: object) {
    return await PersonsModel.updateOne(filter, update)
}