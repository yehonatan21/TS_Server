import { Router} from 'express';
import * as controller from './person.controller';

const router: Router = Router();

router.get('/', controller.options);

router.get('/get', controller.get)

router.get('/getAll', controller.getAll)

router.post('/create', controller.create)

router.put('/update', controller.update)

router.delete('/delete', controller._delete)

export default router;