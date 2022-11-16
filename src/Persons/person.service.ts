import {PersonsModel} from './person.model'
import {IPersonDocument} from './person.types'

export async function handlePerson(data: object){
    await PersonsModel.create(data)
}