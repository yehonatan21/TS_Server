import { Router } from 'express';
import * as controller from './person.controller';
import { Validator } from '../utils/Person/person.validator'

const router: Router = Router();

router.get('/', controller.options);

router.get('/get', Validator('getPersonSchema'), controller.get)

router.get('/getAll', controller.getAll)

router.post('/create', Validator('createPersonSchema'), controller.create)

router.put('/update', controller.update)

router.delete('/delete', controller._delete)

export default router;