import {Request,Response, query} from 'express';
import pool from '../database';

class PruebaController{
    public async index (req:Request,res:Response){
        (await pool).query('Describe rol');
        res.json('prueba');
    }    
}
const pruebaController=new PruebaController();
export default pruebaController;