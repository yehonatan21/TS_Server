import { GroupModel } from './group.model'

export async function addTodb(data) {
    await GroupModel.create(data)
    console.log(data.name + ' created.')
}

export async function findByName(name: String) {
    return await GroupModel.find({ name: name })
}

export async function findAll() {
    return await GroupModel.find({})
}
