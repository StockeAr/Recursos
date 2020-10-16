"use strict";
exports.__esModule = true;
exports.indexController = void 0;
var IndexController = /** @class */ (function () {
    function IndexController() {
    }
    IndexController.prototype.index = function (req, res) {
        res.send('hello');
    };
    return IndexController;
}());
exports.indexController = new IndexController();
