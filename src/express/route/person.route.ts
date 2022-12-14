import { Router } from 'express';
import * as controller from '../controller/person.controller';
import { Validator } from '../../utils/Joi/Person/person.validator'

const router: Router = Router();

router.get('/', controller.options);

router.get('/get/:firstName', controller.get)

router.get('/getPersonsGroup/:firstName', controller.getPersonsGroup)

router.get('/getAll', controller.getAll)

router.post('/create', Validator('createPersonSchema'), controller.create)

router.put('/addPersonToGroup/:personName/:groupName', controller.addPersonToGroup)

router.post('/update', Validator('updatePersonSchema'), controller.update)

router.delete('/delete/:firstName', controller._delete)

router.delete('/deletePersonFromGroup/:personName/:groupName', controller.removePersonFromGroup)

export default router;