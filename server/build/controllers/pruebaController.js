"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class PruebaController {
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
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const prueba = [(yield database_1.default).query('SELECT * FROM prueba')];
            return res.json(prueba);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const prueba = [(yield database_1.default).query('SELECT *FROM prueba where id = ?', [id])];
            if (prueba.length > 0) {
                return res.json(prueba[0]);
            }
            res.status(404).json({ text: 'no se encontro la prueba' });
            console.log(prueba[0]);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (yield database_1.default).query('INSERT INTO prueba set ?', [req.body]);
            res.json({ message: 'se ha creado con exito ' });
            //(await pool).end();
        });
    }
    delete(req, res) {
        res.json({ text: 'eliminando una prueba ' + req.params.id });
    }
    update(req, res) {
        res.json({ text: 'actualizando prueba ' + req.params.id });
    }
}
const pruebaController = new PruebaController();
exports.default = pruebaController;
