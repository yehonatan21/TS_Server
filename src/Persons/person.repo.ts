
import { PersonsModel } from './person.model'

export async function addTodb(data) {
    await PersonsModel.create(data)
    console.log(data.firstName + ' created.')
}

export async function findByName(name: String) {
    return await PersonsModel.find({ firstName: name })
}

export async function findAll() {
    return await PersonsModel.find({})
}

export async function deleteById(id: String) {
    
}

export async function update(id: String, updateFiled,) {

}