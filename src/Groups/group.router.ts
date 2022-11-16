import { Router } from 'express';
import * as controller from './group.controller';
import { Validator } from '../utils/Group/group.validator'

const router: Router = Router();

router.get('/', controller.options);

router.get('/get', Validator('getGroupSchema'), controller.get)

router.get('/getAll', controller.getAll)

router.post('/create', Validator('createGroupSchema'), controller.create)

router.put('/update', controller.update)

router.delete('/delete', controller._delete)
export default router;