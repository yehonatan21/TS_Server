import { query, Router } from 'express';
import * as controller from '../controller/person.controller';
import { Validator } from '../../utils/Person/person.validator'

const router: Router = Router();

router.get('/', controller.options);

router.get('/get', Validator('getPersonSchema', 'qurey'), controller.get)

router.get('/getAll', controller.getAll)

router.post('/create', Validator('createPersonSchema', 'query'), controller.create)

router.put('/addPersontToGroup', Validator('addPersonToGroupSchema', 'body'), controller.addPersonToGroup)

router.put('/update', Validator('updatePersonSchema', 'body'), controller.update)

router.delete('/deletePerson', controller._delete)

router.delete('/deletePersonFromGroup', controller._delete) 

export default router;