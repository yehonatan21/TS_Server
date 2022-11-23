import { Router } from 'express';
import * as controller from '../controller/group.controller';
import { Validator } from '../../utils/Joi/Group/group.validator'

const router: Router = Router();

router.get('/', controller.options);

router.get('/get/:groupName', controller.get)

router.get('/getAll', controller.getAll)

router.post('/create', Validator('createGroupSchema', 'body'), controller.create)

// router.put('/addGroupToGroup', Validator('getGroupSchema', 'body'), controller.addGroupToGroup)

router.put('/update/:groupName/:updateFiled/:value', controller.update)

router.delete('/delete/:groupName', controller._delete)

export default router;