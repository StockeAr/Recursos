import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Autores } from "../entity/Autores";


export class AutorController {
    static getAutorPais=async (req:Request,res:Response,next:NextFunction)=>{
        const autorRepository=getRepository(Autores);
        let autor;
        try{
            autor=await autorRepository.find();
        }catch(e){
            res.status(404).json({message:'Algo anda mal'});
        }
    }
}