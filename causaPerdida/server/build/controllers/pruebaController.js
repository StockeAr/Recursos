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
//import {connect} from '../database';
class PruebaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const prueba = [(yield database_1.default).query('SELECT * FROM prueba')];
            return res.send(prueba);
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
