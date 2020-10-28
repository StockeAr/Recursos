import { Router } from 'express';
import { UserController } from '../controller/UserController';
import { chekRol } from '../middleware/rol';
import { checkJwt } from '../middleware/jwt';

const router = Router();
//Obtener todos los usuarios
router.get('/', [checkJwt, chekRol(['admin'])], UserController.getAll);
//Obtener un usuarios
router.get('/:id', [checkJwt, chekRol(['admin'])], UserController.getById);
//Crear un nuevo usuario
router.post('/', [checkJwt, chekRol(['admin'])], UserController.newUser);
//editar un usuario
router.patch('/:id', [checkJwt, chekRol(['admin'])], UserController.editUser);
//eliminar un usuario
router.delete('/:id', [checkJwt, chekRol(['admin'])], UserController.deleteUser);

export default router;






