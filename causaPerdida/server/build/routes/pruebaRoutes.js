"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pruebaController_1 = __importDefault(require("../controllers/pruebaController"));
class PruebaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', pruebaController_1.default.list);
        this.router.get('/:id', pruebaController_1.default.getOne);
        this.router.post('/', pruebaController_1.default.create);
        this.router.delete('/:id', pruebaController_1.default.delete);
        this.router.put('/:id', pruebaController_1.default.update);
    }
}
const pruebaRoutes = new PruebaRoutes();
exports.default = pruebaRoutes.router;
