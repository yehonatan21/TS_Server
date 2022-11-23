import { Response, Request } from 'express';
import { findByName, createPerson, findAll, updateByName, deleteByName, addToGroup, removeFromGroup } from "../../db/repo/person/person.repo";
import { checkIfExistInGroup, createObject } from '../service/person.service';

export async function options(req: Request, res: Response) {
    res.send('options: get, getAll, create, update, delete')
}

export async function create(req: Request, res: Response) {
    const data = req.query;
    try {
        await createPerson(data)
        res.send('create')
    } catch (err) {
        res.send('Error creating')
    }
}

export async function get(req: Request, res: Response) {
    const data = req.query;
    try {
        const result = await findByName(String(data.firstName))
        if (result === null) {
            res.send('Cant find that person')
        } else {
            res.send(result)
        }
    } catch (err) {
        res.send('Error getting')
    }
}

export async function getAll(req: Request, res: Response) {
    try {
        const result = await findAll()
        res.send(result)
    } catch (err) {
        res.send('Error getAll')
    }
}

export async function addPersonToGroup(req: Request, res: Response) { //BUG: add group record. not name.
    const personName: string = req.body.personName
    const groupName: string = req.body.groupName

    const existInGroup: Boolean = await checkIfExistInGroup(personName, groupName)
    if (existInGroup) {
        res.send('Person exist in group')
    } else {
        try {
            const result = await addToGroup(personName, groupName)
            res.send(result)
        } catch (err) {
            console.log(err.message);
            res.send('Error add person to group');
        }
    }
}

export async function removePersonFromGroup(req: Request, res: Response) {
    const personName: string = req.body.personName
    const groupName: string = req.body.groupName

    const existInGroup: Boolean = await checkIfExistInGroup(personName, groupName)
    if (existInGroup) {
        try {
            const result = await removeFromGroup(personName, groupName)
            res.send(result)
        } catch (err) {
            console.log(err.message);
            res.send('Error remove person to group');
        }
    } else {
        res.send('Person not exist in group')
    }
}

export async function update(req: Request, res: Response) {
    const personToUpdate = createObject('firstName', req.body.personName)
    const updateFiled = createObject(req.body.updateFiled, req.body.value)
    try {
        await updateByName(personToUpdate, updateFiled)
    } catch (err) {
        console.log(err.message);
        res.send('updating error');
    }
    res.send('updated')
}

export async function _delete(req: Request, res: Response) {
    const personName = createObject('firstName', req.body.firstName)
    try {
        await deleteByName(personName)
    } catch (err) {
        console.log(err.message);
        res.send('deleting error');
    }
    res.send('deleted')
    const data = req.body;
}