import {Router} from 'express';
import pruebaController from '../controllers/pruebaController';

class PruebaRoutes {
    public router:Router=Router();
    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', pruebaController.index);
    }
}
const pruebaRoutes = new PruebaRoutes();
export default pruebaRoutes.router;