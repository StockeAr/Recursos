import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { User } from "../entity/User";
import { validate } from 'class-validator';

export class UserController {
    //Obtener todos los usuarios
    static getAll = async (req: Request, res: Response) => {
        const userRepository = getRepository(User);
        let users;
        try {
            users = await userRepository.find(/* { select: ['id', 'username', 'rol'] } */);
        }
        catch (e) {
            res.status(404).json({ mesaje: 'Algo anda mal :v' });
        }
        //aqui comprobamos si existe algun usuario
        if (users.length > 0) {
            res.send(users);
        } else {
            res.status(404).json({ mesaje: 'No Hubo resultado' });
        }
    };
    static getById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const userRepository = getRepository(User);
        try {
            const user = await userRepository.findOneOrFail(id);
            res.send(user);
        }
        catch (e) {
            res.status(404).json({ message: 'No hubo resultado' });
        }
    };
    static newUser = async (req: Request, res: Response) => {
        const { username, password, rol } = req.body;
        const user = new User();
        user.username = username;
        user.password = password;
        user.rol = rol;
        //validaciones
        const opcionesValidacion = { validationError: { target: false, value: false } };
        const errors = await validate(user,opcionesValidacion);
        if (errors.length > 0) {
            return res.status(404).json(errors);
        }
        //aqui vamos a realizar el hash para mas seguridad en las contraseñas

        const userRepository = getRepository(User);
        try {
            user.hashPassword();
            await userRepository.save(user);
        }
        catch {
            return res.status(409).json({ message: 'El nombre de usuario existe' });
        }
        //si todo esta bien mando un mensaje al front
        res.send('Usuario creado');
    };
    static editUser = async (req: Request, res: Response) => {
        let user;
        const { id } = req.params;
        const { username, rol } = req.body;
        const userRepository = getRepository(User);
        try {
            user = await userRepository.findOneOrFail(id);
            user.username = username;
            user.rol = rol;
        }
        catch (e) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        const opcionesValidacion = { validationError: { target: false, value: false } };
        const errors = await validate(user,opcionesValidacion);
        if (errors.length > 0) {
            return res.status(400).json(errors);
        }

        //si todo esta bien guardamos los datos
        try {
            await userRepository.save(user);
        }
        catch (e) {
            return res.status(409).json({ message: 'El usuario esta en uso' })
        }
        res.status(201).json({ message: 'usuario se ha modificado' });
    };
    static deleteUser = async (req: Request, res: Response) => {
        const { id } = req.params;
        const userRepository = getRepository(User);
        let user: User;
        try {
            user = await userRepository.findOneOrFail(id);
        }
        catch (e) {
            return res.status(404).json({ message: 'Usuario no encontrado' })
        }
        //eliminando el usuario
        userRepository.delete(id);
        res.status(201).json({ message: 'Usuario eliminado' });
    };
}
export default UserController;