import { Response, Request } from 'express';
import { findByName, createGroup, findAll, updateByName, deleteByName, addGroupToGroupDB } from "../../db/repo/group/group.repo";
import { IGroupDocument } from '../../type/group.types';
import { ifGroupNotInGroup, ifGroupNotIsPrototype, ifGroupNotItself } from '../service/group.service';
import { createObject } from '../service/person.service';

export async function options(req: Request, res: Response) {
    res.send('options: get, getAll, create, update, delete')
}

export async function create(req: Request, res: Response) {
    const data = req.query;
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
    const mainGroup = req.params.mainGroup
    const groupToAdd = req.params.groupToAdd

    try {
        const mainGroupDoc = await findByName(mainGroup)
        const groupToAddDoc = await findByName(groupToAdd)

        if (
            mainGroupDoc &&
            groupToAddDoc &&
            ifGroupNotInGroup(mainGroupDoc, groupToAddDoc) &&
            ifGroupNotItself(String(mainGroupDoc._id), String(groupToAddDoc._id)) &&
            ifGroupNotIsPrototype(mainGroupDoc, groupToAddDoc)
        ) {
            addGroupToGroupDB(mainGroupDoc.name, groupToAddDoc._id)
            res.send('Add Group')
        } else {
            res.send('Groups not exist')
        }
    } catch (err) {
        res.send('Error ADD group To group')
    }
}