"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PruebaController {
    index(req, res) {
        res.send('prueba');
    }
}
const pruebacontroller = new PruebaController();
exports.default = pruebacontroller;
