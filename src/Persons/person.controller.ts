import { connect, disconnect } from "../database/database";
import { Response, Request } from 'express';
import { validateQueryParams } from '../utils/validation'

connect();

function create(req: Request, res: Response) {
    res.send(`${req.query.name} created`)
}

async function options(req: Request, res: Response) {
    res.send('options: get, getAll, create, update, delete')
}

async function get(req: Request, res: Response) {
    const data = req.query;
    const status = validateQueryParams(Object(data))
    res.send('get')
}

async function getAll(req: Request, res: Response) {
    const data = req.query;
    const status = validateQueryParams(Object(data))
    res.send('getAll')
}

function update(req: Request, res: Response) {
    const data = req.query;
    const status = validateQueryParams(Object(data))
    res.send('update')
}

function _delete(req: Request, res: Response) {
    const data = req.query;
    const status = validateQueryParams(Object(data))
    res.send('delete')
}

disconnect()

export { create, get, getAll, update, _delete, options }