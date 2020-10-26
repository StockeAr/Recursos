import { Router } from 'express';
import { UserController } from '../controller/UserController';
import { checkJwt } from '../middleware/jwt';
const router = Router();
//Obtener todos los usuarios
router.get('/', [checkJwt], UserController.getAll);
//Obtener un usuarios
router.get('/:id', [checkJwt], UserController.getById);
//Crear un nuevo usuario
router.post('/', [checkJwt], UserController.newUser);
//editar un usuario
router.patch('/:id', [checkJwt], UserController.editUser);
//eliminar un usuario
router.delete('/:id', [checkJwt], UserController.deleteUser);

export default router;






