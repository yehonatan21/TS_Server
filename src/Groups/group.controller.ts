import { connect, disconnect } from "../database/database";
import { Response, Request } from 'express';
import { validateQueryParams } from '../utils/group.validation'
import { findByName, addTodb, findAll } from "./group.repo";

async function create(req: Request, res: Response) {
    const data = req.query;
    const notValid = validateQueryParams(Object(data))
    if (notValid) {
        res.send(notValid)
    } else {
        try {
            await addTodb(data)
            res.send('create')
        } catch (err) {
            res.send('Error creating')
        }
    }
}

async function options(req: Request, res: Response) {
    res.send('options: get, getAll, create, update, delete')
}

async function get(req: Request, res: Response) {
    const data = req.query;
    const notValid = validateQueryParams(Object(data))
    if (notValid) {
        res.send(notValid)
    } else {
        try {
            //...
            const result = await findByName(String(data.name))
            res.send(result)
        } catch (err) {
            res.send('Error getting')
        } 
    }
}

async function getAll(req: Request, res: Response) {
    try {
        const result = await findAll()
        res.send(result)
    } catch (err) {
        res.send('Error getAll')
    } 
}

async function update(req: Request, res: Response) {
    const data = req.query;
    const notValid = validateQueryParams(Object(data))
    if (notValid) {
        res.send(notValid)
    } else {
        try {
            //...
            res.send('update')
        } catch (err) {
            res.send('Error deleting')
        } 
    }
}

async function _delete(req: Request, res: Response) {
    const data = req.query;
    const notValid = validateQueryParams(Object(data))
    if (notValid) {
        res.send(notValid)
    } else {
        try {
            //...
            res.send('delete')
        } catch (err) {
            res.send('Error deleting')
        } 
    }
}

export { create, get, getAll, update, _delete, options }