import { IGroupDocument } from '../../../type/group.types'
import { GroupModel } from './group.model'

export async function addTodb(data) {
    await GroupModel.create(data)
    console.log(data.name + ' created.')
}

export async function findByName(name: String): Promise<IGroupDocument> {
    return await GroupModel.find({ name: name }).lean()
}

export async function findAll() {
    return await GroupModel.find({})
}