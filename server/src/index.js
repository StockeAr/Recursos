"use strict";
exports.__esModule = true;
var express_1 = require("express");
var morgan_1 = require("morgan");
var cors_1 = require("cors");
var indexRoutes_1 = require("./routes/indexRoutes");
var pruebaRoutes_1 = require("./routes/pruebaRoutes");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1["default"]();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1["default"]('dev'));
        this.app.use(cors_1["default"]());
        this.app.use(express_1["default"].json());
        this.app.use(express_1["default"].urlencoded({ extended: false }));
    };
    Server.prototype.routes = function () {
        this.app.use('/', indexRoutes_1["default"]);
        this.app.use('/api/prueba', pruebaRoutes_1["default"]);
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get('port'), function () {
            console.log('Server on port ', _this.app.get('port'));
        });
    };
    return Server;
}());
var server = new Server();
server.start();
