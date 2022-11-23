import { query, Router } from 'express';
import * as controller from '../controller/person.controller';
import { Validator } from '../../utils/Person/person.validator'

const router: Router = Router();

router.get('/', controller.options);

router.get('/get', Validator('getPersonSchema', 'qurey'), controller.get)

router.get('/getAll', controller.getAll)

router.post('/create', Validator('createPersonSchema', 'query'), controller.create)

router.put('/addPersonToGroup', Validator('addPersonToGroupSchema', 'body'), controller.addPersonToGroup)

router.put('/update', Validator('updatePersonSchema', 'body'), controller.update)

router.delete('/deletePerson', Validator('getPersonSchema', 'body'), controller._delete)

router.delete('/deletePersonFromGroup', Validator('addPersonToGroupSchema', 'body'), controller.removePersonFromGroup)

export default router;