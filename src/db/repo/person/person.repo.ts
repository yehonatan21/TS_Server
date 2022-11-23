import { IPersonDocument } from '../../../type/person.types'
import { PersonsModel } from './person.model'
import { addPersonToGroup, removePersonFromGroup } from '../group/group.repo'

export async function addTodb(data) {
    await PersonsModel.create(data)
    console.log(data.firstName + ' created.')
}

export async function findByName(name: String): Promise<IPersonDocument> {
    return await PersonsModel.findOne({ firstName: name }).lean()
}

export async function findAll(): Promise<[IPersonDocument]> {
    return await PersonsModel.find().lean()
}

export async function deleteByName(name: object) {
    return await PersonsModel.deleteOne(name)
}

export async function addToGroup(personName: string, groupName: string) {
    const personID = await (await findByName(personName))._id
    const groupExist = await addPersonToGroup(personID, groupName)

    if (groupExist) {
        await PersonsModel.updateOne(
            { firstName: personName },
            { $push: { groups: groupName } },
        );
        return `${personName} added to ${groupName}`
    } else {
        return 'Group not exist'
    }
}

export async function removeFromGroup(personName: string, groupName: string) {
    const personID = await (await findByName(personName))._id
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
    return await PersonsModel.findOneAndUpdate(filter, update)
}