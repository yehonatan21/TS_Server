import { Response, Request } from 'express';
import { findByName, addTodb, findAll, deleteById, addToGroup } from "../../db/repo/person/person.repo";
import { checkIfExistInGroup } from '../service/person.service';

export async function create(req: Request, res: Response) {
    const data = req.query;
    try {
        await addTodb(data)
        res.send('create')
    } catch (err) {
        res.send('Error creating')
    }
}

export async function options(req: Request, res: Response) {
    res.send('options: get, getAll, create, update, delete')
}

export async function get(req: Request, res: Response) {
    const data = req.query;
    try {
        //...
        const result = await findByName(String(data.firstName))
        res.send(result)
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

export async function addPersonToGroup(req: Request, res: Response) {
    const personName: string = req.body.personName
    const GroupName: string = req.body.groupName

    const existInGroup: Boolean = await checkIfExistInGroup(personName, GroupName)
    if (existInGroup) {
        res.send('Person exist in group')
    } else {
        try {
            const result = await addToGroup(personName, GroupName)
            res.send(result)
        } catch (err) {
            console.log(err.message);
            res.send('Error add person to group');
        }
    }
}

export async function update(req: Request, res: Response) {
    const data = req.body;
}

export async function _delete(req: Request, res: Response) {
    const data = req.body;
}