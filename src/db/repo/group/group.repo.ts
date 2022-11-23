import { ParsedQs } from 'qs'
import { IGroupDocument } from '../../../type/group.types'
import { GroupModel } from './group.model'

export async function createGroup(data: ParsedQs) {
    await GroupModel.create(data)
    console.log(data.name + ' created.')
}

export async function findByName(name: String): Promise<IGroupDocument> {
    return await GroupModel.findOne({ name: name }).lean()
}

export async function findAll() {
    return await GroupModel.find()
}

export async function addPersonToGroup(personId: string, groupName: string) {
    const ifGroupExist = await findByName(groupName)
    if (!ifGroupExist) {
        return ifGroupExist
    } else {
        return await GroupModel.updateOne(
            { name: groupName },
            { $push: { persons: personId } },
        );
    }
}

export async function removePersonFromGroup(personId: string, groupName: string) {
    const GroupExist = await findByName(groupName)
    if (!GroupExist) {
        return GroupExist
    } else {
        return await GroupModel.updateOne(
            { name: groupName },
            { $pull: { persons: personId } },
        );
    }
}

export async function deleteByName(groupName: string) {
    const groups = (await findByName(groupName)).groups
    for (const group of groups) {
        await GroupModel.deleteOne({ name: group })
        console.log(group)
    }
    return await GroupModel.deleteOne({ name: groupName })
}

export async function updateByName(filter: object, update: object) {
    return await GroupModel.updateOne(filter, update)
}