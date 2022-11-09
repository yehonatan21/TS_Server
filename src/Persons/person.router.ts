import * as express from 'express';
import * as controller from './person.controller';

const router: express.Router = express();

router.get('/', (req: express.Request, res: express.Response) => {
    res.send('options: get, getAll, create, update, delete')
})

router.get('/get',async (req: express.Request, res: express.Response) => {
    res.send(await controller.get(String(req.query.name)))
})

router.get('/getAll', async (req: express.Request, res: express.Response) => {
    res.send(await controller.getAll())
})

router.post('/create', (req: express.Request, res: express.Response) => {
    res.send(controller.create(String(req.query.name)))
})

router.put('/update', (req: express.Request, res: express.Response) => {
    res.send(controller.update(String(req.query.name)))
})

router.delete('/delete', (req: express.Request, res: express.Response) => {
    res.send(controller._delete(String(req.query.name))
    )
})

export default router;