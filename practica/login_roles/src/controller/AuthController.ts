import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { User } from '../entity/User';
import * as jwt from 'jsonwebtoken';
import config from '../config/config';
import { validate } from 'class-validator';

class AuthController {
    static login = async (req: Request, res: Response) => {
        //req es lo que nos enviara el front-end
        const { username, password } = req.body;
        if (!(username && password)) {
            return res.status(404).json({ message: 'Usuario y Contraseña son requeridos' });
        }
        const userRepository = getRepository(User);
        let user: User;
        try {
            user = await userRepository.findOneOrFail({ where: { username } });
        }
        catch (e) {
            return res.status(404).json({ message: 'Usuario / Contraseña son incorrectos' });
        }

        //verificando la contraseña
        if (!user.checkPassword(password)) {
            return res.status(400).json({ message: 'Usuario / Contraseña son incorrectos' });
        }
        const token = jwt.sign({ userId: user.id, username: user.username }, config.jwtSecret, { expiresIn: '1h' });
        res.json({ message: 'Ok', token });
    };

    static changePassword = async (req: Request, res: Response) => {
        const { userId } = res.locals.jwtPayload;
        const { oldPassword, newPassword } = req.body;
        if (!(oldPassword && newPassword)) {
            res.status(400).json({ message: 'La contraseña nueva / anterior son requeridas' });
        }
        const userRepository = getRepository(User);
        let user: User;
        try {
            user = await userRepository.findOneOrFail(userId);
        }
        catch (e) {
            res.status(400).json({ message: 'Algo anda mal >:V ' })
        }
        if (!user.checkPassword(oldPassword)) {
            return res.status(401).json({ message: 'Verifique su contraseña anterior' });
        }
        user.password = newPassword;
        const opcionesValidacion = { validationError: { target: false, value: false } };
        const errors = await validate(user, opcionesValidacion);
        if(errors.length>0){
            return res.status(400).json(errors);
        }
        //has de la contraseña
        user.hashPassword();
        userRepository.save(user);
        res.json({message: 'Se ha cambiado la contraseña'});
    }
}
export default AuthController;