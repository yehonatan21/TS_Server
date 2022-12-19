import { IPersonDocument } from '../../../type/person.types'
import { PersonsModel } from './person.model'
import { addPersonToGroup, findGroupByName, removePersonFromGroup } from '../group/group.repo'
import { IGroupDocument } from '../../../type/group.types'

export async function createPerson(data) {
    await PersonsModel.create(data)
}

// export function createPerson(data) {
//     PersonsModel.create({ data }, (err) => {
//         if (err) return err.message;
//     })
// }

export async function findPersonByName(name: String): Promise<IPersonDocument> {
    return await PersonsModel.findOne({ firstName: name }).lean()
}

export async function findPersonGroup(name: String): Promise<IPersonDocument> {
    return await PersonsModel.findOne({ firstName: name }, 'groups').lean()
}

export async function findAll(): Promise<[IPersonDocument]> {
    return await PersonsModel.find().lean()
}

export async function deleteByName(name: object) {
    return await PersonsModel.deleteOne(name)
}

export async function addToGroup(personName: string, groupName: string) {
    const person = await findPersonByName(personName)
    const group = await findGroupByName(groupName)

    const isAdded = await addPersonToGroup(person, group._id)
    
    if (isAdded) {
        await PersonsModel.updateOne(
            { _id: person._id },
            { $push: { groups: group._id } },
        );
        return `${personName} added to group ${groupName}`
    } else {
        return 'Group not exist'
    }
}

export async function removeFromGroup(personName: string, groupName: string) {
    const personID = await (await findPersonByName(personName))._id
    const group = await findGroupByName(groupName)

    if (group) {
        await removePersonFromGroup(personID, groupName)
        await PersonsModel.updateOne(
            { firstName: personName },
            { $pull: { groups: group._id } },
        );
        return `${personName} removed from ${groupName}`
    } else {
        return 'Group not exist'
    }
}

export async function updateByName(filter: object, update: object) {
    return await PersonsModel.updateOne(filter, update)
}

export async function deleteGroupsRef(groupDoc: IGroupDocument) {
    for (const groupID of groupDoc.groups) {
        await PersonsModel.updateMany(
            { groups: groupID },
            { $pull: { groups: groupID } },
        )
    }
    await PersonsModel.updateMany(
        { groups: groupDoc._id },
        { $pull: { groups: groupDoc._id } },
    )
}