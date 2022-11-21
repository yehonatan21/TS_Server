import { IGroupDocument } from '../../../type/group.types'
import { GroupModel } from './group.model'

export async function addTodb(data) {
    await GroupModel.create(data)
    console.log(data.name + ' created.')
}

export async function findByName(name: String): Promise<IGroupDocument> {
    return await GroupModel.findOne({ name: name }).lean()
}

export async function findAll() {
    return await GroupModel.find({})
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