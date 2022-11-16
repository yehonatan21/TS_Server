import { connect, disconnect } from "../database/database";
import { Response, Request } from 'express';
import { validateQueryParams } from '../utils/person.validation'
import { findByName, addTodb, findAll, deleteById } from "./person.repo";


async function create(req: Request, res: Response) {
    const data = req.query;
    const notValid = validateQueryParams(Object(data))
    if (notValid) {
        res.send(notValid)
    } else {
        try {
            // await connect();
            await addTodb(data)
            res.send('create')
        } catch (err) {
            res.send('Error creating')
        } finally {
            // await disconnect();
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
            // await connect();
            //...
            const result = await findByName(String(data.firstName))
            res.send(result)
        } catch (err) {
            res.send('Error getting')
        } finally {
            // await disconnect();
        }
    }
}

async function getAll(req: Request, res: Response) {
    try {
        // await connect();
        const result = await findAll()
        res.send(result)
    } catch (err) {
        res.send('Error getAll')
    } finally {
        // await disconnect();
    }
}

async function update(req: Request, res: Response) {
    const data = req.query;
    const notValid = validateQueryParams(Object(data))
    if (notValid) {
        res.send(notValid)
    } else {
        try {
            // await connect();
            //...
            res.send('update')
        } catch (err) {
            res.send('Error deleting')
        } finally {
            // await disconnect();
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
            // await connect();
            //const result = await deleteById()
            res.send('delete')
        } catch (err) {
            res.send('Error deleting')
        } finally {
            // await disconnect();
        }
    }
}

export { create, get, getAll, update, _delete, options }