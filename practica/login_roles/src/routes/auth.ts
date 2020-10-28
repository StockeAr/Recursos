import {Router} from 'express';
import AuthController from '../controller/AuthController';
import {checkJwt} from '../middleware/jwt';

const router=Router();
//login
router.post('/login',AuthController.login);
//cambiar la contraseña, para ademas restringir sola al admin, se debe importar el checkRol
router.post('/change-password',[checkJwt],AuthController.changePassword)
export default router;