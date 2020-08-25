import {Request,Response, query} from 'express';
import pool from '../database';

class PruebaController{

    /*public async list (req:Request,res:Response){
        (await pool).query('Describe rol');
        res.json({text:'listando pruebas'});
    }*/
    public async list(req:Request,res:Response){
        const prueba = (await pool).query('SELECT * FROM prueba');
        res.json(prueba);
    }

    public getOne(req:Request,res:Response){
        const {id}=req.params;
    }

    public async create(req:Request, res:Response){
        (await pool).query('INSERT INTO prueba set ?',[req.body]);
        res.json({message:'se ha creado la prueba '});
    }  
    public delete(req:Request,res:Response){
        res.json({text:'eliminando una prueba '+req.params.id});
    }
    public update(req:Request, res:Response){
        res.json({text:'actualizando prueba '+req.params.id});
    }
}
const pruebaController=new PruebaController();
export default pruebaController;