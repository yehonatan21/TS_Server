import { Response, Request } from 'express';
import { findByName, addTodb, findAll, deleteById } from "../../db/repo/person/person.repo";

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

export async function update(req: Request, res: Response) {
    const data = req.query;
}

export async function _delete(req: Request, res: Response) {
    const data = req.query;
}