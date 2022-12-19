import { IGroupDocument } from '../../../type/group.types'
import { IPersonDocument } from '../../../type/person.types'
import { GroupModel } from './group.model'

export async function createGroup(data) {
    await GroupModel.create(data)
    console.log(data.groupName + ' created.')
}

export async function findGroupByName(name: String): Promise<IGroupDocument> {
    return await GroupModel.findOne({ groupName: name }).lean()
}

export async function getGroupHierarchy(name: String): Promise<IGroupDocument> { // FIXME: return docs, not references
    return await GroupModel.findOne({ groupName: name }, 'persons groups').lean()
}

export async function findAll() {
    return await GroupModel.find()
}

export async function findPersonInGroup(groupName: string, personName: string) {
    try {
        const result = await GroupModel.findOne({ groupName: groupName }).
            populate('persons')
        return result
    } catch (err) {
        console.log(err.message)
    }
}

// export async function findPersonInGroup(groupName: string, personName: string): Promise<IGroupDocument> {
//     return await GroupModel.findOne({ 'groupName': groupName }, {
//         persons: {
//             $elemMatch: {
//                 name: {
//                     $regex: personName,
//                     $options: 'i'
//                 }
//             }
//         }
//     })
// }

export async function findGroupById(groupID: string): Promise<IGroupDocument> {
    return await GroupModel.findOne({ _id: groupID }).lean()
}

export async function addPersonToGroup(person: IPersonDocument, groupId: string) {
    const ifGroupExist = await findGroupById(groupId)
    if (!ifGroupExist) {
        return ifGroupExist
    } else {
        //BUG: when update the persons name in the document the name ref is not updating
        return await GroupModel.updateOne(
            { _id: groupId },
            { $push: { persons: person._id } },
        );
    }
}

export async function addGroupToGroupDB(mainGroup: string, groupToAddId: string) {
    return await GroupModel.updateOne(
        { groupName: mainGroup },
        { $push: { groups: groupToAddId } },
    );
}

export async function removePersonFromGroup(personId: string, groupName: string) {
    return await GroupModel.updateOne(
        { groupName: groupName },
        { $pull: { persons: personId } },
    );
}

export async function updateByName(filter: object, update: object) {
    return await GroupModel.updateOne(filter, update)
}

export async function deleteByName(groupName: string) {
    const groups = (await findGroupByName(groupName)).groups
    for (const group of groups) {
        await GroupModel.deleteOne({ groupName: group })
    }
    return await GroupModel.deleteOne({ groupName: groupName })
}

export async function deleteGroupsArray(groupsID: string[]) {
    await GroupModel.deleteMany(
        {
            _id: { $in: groupsID },
        })
}