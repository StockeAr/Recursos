"use strict";
exports.__esModule = true;
var express_1 = require("express");
var pruebaController_1 = require("../controllers/pruebaController");
var PruebaRoutes = /** @class */ (function () {
    function PruebaRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    PruebaRoutes.prototype.config = function () {
        this.router.get('/', pruebaController_1["default"].list);
        this.router.get('/:id', pruebaController_1["default"].getOne);
        this.router.post('/', pruebaController_1["default"].create);
        this.router["delete"]('/:id', pruebaController_1["default"]["delete"]);
        this.router.put('/:id', pruebaController_1["default"].update);
    };
    return PruebaRoutes;
}());
var pruebaRoutes = new PruebaRoutes();
exports["default"] = pruebaRoutes.router;
