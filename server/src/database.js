"use strict";
exports.__esModule = true;
var promise_mysql_1 = require("promise-mysql");
var keys_1 = require("./keys");
//import { createPool } from 'mysql2';
var pool = promise_mysql_1["default"].createPool(keys_1["default"].database);
pool.then(function (r) { return r.getConnection().then(function (connection) {
    r.releaseConnection(connection);
    console.log('D.B. is connected');
}); });
exports["default"] = pool;
//este codigo si es funcional
/*pool.getConnection()
    .then(connection =>{
        pool.releaseConnection(connection);
        console.log('DB is connected');
    });

el motivo del error de coneccion, que presenta las lineas comentadas en la parte superior, es por la version
de 'promise-mysql', en el tutorial se usa 'promise-mysql@3.3.1' .
*/
