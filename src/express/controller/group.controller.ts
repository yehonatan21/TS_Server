import { Response, Request } from 'express';
import { ParsedQs } from 'qs';
import { findByName, createGroup, findAll, updateByName, deleteByName } from "../../db/repo/group/group.repo";
import { IGroupDocument } from '../../type/group.types';
import { createObject } from '../service/person.service';

export async function options(req: Request, res: Response) {
    res.send('options: get, getAll, create, update, delete')
}

export async function create(req: Request, res: Response) {
    const data: ParsedQs = req.query;
    try {
        await createGroup(data)
        res.send(`${data.name} created`)
    } catch (err) {
        res.send('Error creating')
    }
}

export async function get(req: Request, res: Response) {
    const groupName = req.params.groupName;
    try {
        const result: IGroupDocument = await findByName(String(groupName))
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
    const groupToUpdate = createObject('groupName', req.body.groupName)
    const updateFiled = createObject(req.body.updateFiled, req.body.value)

    try {
        await updateByName(groupToUpdate, updateFiled)
    } catch (err) {
        console.log(err.message);
        res.send('updating error');
    }
    res.send('updated')
}

export async function _delete(req: Request, res: Response) {
    // const groupName = createObject('name', req.body.groupName)
    const groupName = req.params.groupName

    try {
        await deleteByName(groupName)
        res.send('deleted')
    } catch (err) {
        console.log(err.message);
        res.send('deleting error');
    }
}

export async function addGroupToGroup(req: Request, res: Response) {
    try {

    } catch (err) {
        res.send('Error getAll')
    }
}