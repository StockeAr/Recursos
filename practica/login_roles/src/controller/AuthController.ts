import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { User } from '../entity/User';
import * as jwt from 'jsonwebtoken';
import config from '../config/config';

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
}
export default AuthController;