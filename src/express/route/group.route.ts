import { Router } from 'express';
import * as controller from '../controller/group.controller';
import { Validator } from '../../utils/Joi/Group/group.validator'

const router: Router = Router();

router.get('/', controller.options);

router.get('/get/:groupName', controller.get)

router.get('/getHierarchy/:groupName', controller.getHierarchy)

router.get('/searchPersonInGroup/:groupName/:personName', controller.searchPerson)

router.get('/getAll', controller.getAll)

router.post('/create', Validator('createGroupSchema'), controller.create)

router.post('/update', Validator('updateGroupSchema'), controller.update)

router.put('/addGroupToGroup/:mainGroup/:groupToAdd', controller.addGroupToGroup)

router.delete('/delete/:groupName', controller._delete)

export default router;