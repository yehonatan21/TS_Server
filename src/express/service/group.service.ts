import { IGroupDocument } from "../../type/group.types"

export function ifGroupNotItself(mainGroupDocId: string, groupToAddDocId: string) {
    return mainGroupDocId !== groupToAddDocId
}

export function ifGroupNotIsPrototype(mainGroupDoc: IGroupDocument, groupToAddDoc: IGroupDocument) {
    return ifGroupNotInGroup(groupToAddDoc, mainGroupDoc)
}

export function ifGroupNotInGroup(mainGroupDoc: IGroupDocument, groupToAddDoc: IGroupDocument) {
    return !mainGroupDoc.groups.includes(String(groupToAddDoc._id))
}