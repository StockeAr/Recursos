import {Router} from 'express';
import pruebaController from '../controllers/pruebaController';

class PruebaRoutes {
    public router:Router=Router();
    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', pruebaController.list);
        this.router.get('/:id', pruebaController.getOne);
        this.router.post('/',pruebaController.create);
        this.router.delete('/:id',pruebaController.delete);
        this.router.put('/:id',pruebaController.update);
    }
}
const pruebaRoutes = new PruebaRoutes();
export default pruebaRoutes.router;