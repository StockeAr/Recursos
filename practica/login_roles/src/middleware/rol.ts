import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';
export const chekRol = (roles: Array<string>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const { userId } = res.locals.jwtPayload;
        const userRepository = getRepository(User);
        let user: User;
        try {
            user = await userRepository.findOneOrFail(userId);
        }
        catch (e) {
            return res.status(401).json({ message: 'No esta autorizado' });
        }
        //Verifico si el rol coincide
        const { rol } = user;
        if (roles.includes(rol)) {
            next();
        } else {
            res.status(401).json({ message: 'No esta autorizado' });
        }
    }
}