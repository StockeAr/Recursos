import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Autores } from "../entity/Autores";
import { Paises } from "../entity/Paises";
import { resolve } from "url";
import { userInfo } from "os";

export class AutorController {
    static getAutorPais=async (req:Request,res:Response,next:NextFunction)=>{
        const autorRepository=getRepository(Autores);
        const paisRepository=getRepository(Paises);
        let autor;
        let pais;
        try{
            autor=await autorRepository.find();
        }catch(e){
            res.status(404).json({message:'Algo anda mal'});
        }
    }
}