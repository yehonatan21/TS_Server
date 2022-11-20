import { IPersonDocument, IPersonModel } from '../../../type/person.types'
import { PersonsModel } from './person.model'

export async function addTodb(data) {
    await PersonsModel.create(data)
    console.log(data.firstName + ' created.')
}

export async function findByName(name: String): Promise<IPersonDocument> {
    return await PersonsModel.find({ firstName: name }).lean()
}
export async function getGroupsByName(name: String): Promise<[String]> {
    return await PersonsModel.find({ firstName: name }).select('groups -_id').lean()
}

export async function findAll() {
    return await PersonsModel.find({})
}

export async function deleteById(id: String) {

}

export async function addToGroup(name) {
    return await PersonsModel.updateOne(
        { firstName: name },
        { $push: { groups: 'fgh' } }, //FIXME: groupName
    );
}

export async function update(id: String, updateFiled,) {

}