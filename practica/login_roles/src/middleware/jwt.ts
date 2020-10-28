import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../config/config';

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    //auth es el nombre que le asigno para pasa por parametro en esta variable el token de config.ts para validar en el postman
    const token = <string>req.headers['auth'];
    let jwtPayload;
    try {
        jwtPayload = <any>jwt.verify(token, config.jwtSecret);
        res.locals.jwtPayload = jwtPayload;
    }
    catch (e) {
        return res.status(401).json({ message: 'No esta autorizado' });
    }
    const { userId, username } = jwtPayload;
    const newtoken = jwt.sign({ userId, username }, config.jwtSecret, { expiresIn: '1h' });
    res.setHeader('token', newtoken);
    next();
}