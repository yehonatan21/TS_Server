import { Response, Request } from 'express';
import { findGroupByName, createGroup, findAll, updateByName, deleteByName, addGroupToGroupDB, deleteGroupsArray, getGroupHierarchy, findPersonInGroup } from "../../db/repo/group/group.repo";
import {deleteGroupsRef} from "../../db/repo/person/person.repo";
import { IGroupDocument } from '../../type/group.types';
import { ifGroupNotInGroup, ifGroupNotIsPrototype, ifGroupNotItself } from '../service/group.service';
import { createObject } from '../service/person.service';

export async function options(req: Request, res: Response) {
    res.send('options: get, getAll, create, update, delete')
}

export async function create(req: Request, res: Response) {
    const data = req.body;

    try {
        await createGroup(data)
        res.send(`${data.groupName} created`)
    } catch (err) {
        res.status(422).send('Error creating')
    }
}

export async function get(req: Request, res: Response) {
    const groupName = req.params.groupName;
    try {
        const result: IGroupDocument = await findGroupByName(String(groupName))
        res.send(result)
    } catch (err) {
        res.status(422).send('Error getting')
    }
}

export async function getHierarchy(req: Request, res: Response) {
    const groupName = req.params.groupName;
    try {
        const result: IGroupDocument = await getGroupHierarchy(String(groupName))
        res.send(result)
    } catch (err) {
        res.status(422).send('Error getting')
    }
}

export async function searchPerson(req: Request, res: Response) { 
    const groupName = req.params.groupName;
    const personName = req.params.personName;

    try {
        const result = await findPersonInGroup(groupName,personName)
        res.send(result)
    } catch (err) {
        console.log(err.message)
        res.status(422).send('Error getting')
    }
}

export async function getAll(req: Request, res: Response) {
    try {
        const result = await findAll()
        res.send(result)
    } catch (err) {
        res.status(422).send('Error getAll')
    }
}

export async function update(req: Request, res: Response) {
    const groupToUpdate = createObject('groupName', req.body.groupName)
    const updateFiled = createObject(req.body.updateFiled, req.body.value)

    try {
        await updateByName(groupToUpdate, updateFiled)
    } catch (err) {
        console.log(err.message);
        res.status(422).send('updating error');
    }
    res.send('updated')
}

export async function _delete(req: Request, res: Response) {
    const groupName = req.params.groupName

    try {
        const groupDoc = await findGroupByName(groupName)
        await deleteGroupsArray(groupDoc.groups)
        await deleteByName(groupName)
        await deleteGroupsRef(groupDoc)
        res.send('deleted')
    } catch (err) {
        console.log(err.message);
        res.status(422).send('deleting error');
    }
}

export async function addGroupToGroup(req: Request, res: Response) {
    const mainGroup = req.params.mainGroup
    const groupToAdd = req.params.groupToAdd

    try {
        const mainGroupDoc = await findGroupByName(mainGroup)
        const groupToAddDoc = await findGroupByName(groupToAdd)
        
        if (
            mainGroupDoc &&
            groupToAddDoc &&
            ifGroupNotInGroup(mainGroupDoc, groupToAddDoc) &&
            ifGroupNotItself(String(mainGroupDoc._id), String(groupToAddDoc._id)) &&
            ifGroupNotIsPrototype(mainGroupDoc, groupToAddDoc)
        ) {
            addGroupToGroupDB(mainGroupDoc.groupName, groupToAddDoc._id)
            res.send(`Added ${groupToAdd} Group to ${mainGroup}`)
        } else {
            res.status(422).send('Groups not exist')
        }
    } catch (err) {
        res.status(422).send('Error ADD group To group')
    }
}