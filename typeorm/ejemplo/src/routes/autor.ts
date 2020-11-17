import { Router } from 'express';
import { AutorController } from '../controller/AutorController';

const router=Router();

router.get('/',AutorController.getAutorPais);

export default router;