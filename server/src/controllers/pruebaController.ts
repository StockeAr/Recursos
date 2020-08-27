import {Request,Response, query} from 'express';
import pool from '../database';

class PruebaController{

    /*public async getOne (req:Request,res:Response):Promise<any>{
        const {id} = req.params;
        await pool.query('SELECT * FROM games where id=?',[id], function(err, result, fields) {
            if (err) throw err;
            if(result.length > 0){
            return res.json(result[0]);
         }
         res.status(404).json({text: "the game doesn´t exists"});
        });
    }*/
    public async list(req:Request,res:Response):Promise<any>{
        const prueba = [(await pool).query('SELECT * FROM prueba')];
        return res.json(prueba);
        
    }

    public async getOne(req:Request,res:Response):Promise<any>{
        const {id}=req.params;
        const prueba=[(await pool).query('SELECT *FROM prueba where id = ?',[id])];
        if(prueba.length > 0){
            return res.json(prueba[0]);
        }
        res.status(404).json({text : 'no se encontro la prueba'});
        console.log(prueba[0]);
    }

    public async create(req:Request, res:Response):Promise<void>{
        (await pool).query('INSERT INTO prueba set ?',[req.body]);
        res.json({message:'se ha creado con exito '});
        //(await pool).end();
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