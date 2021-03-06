"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./keys"));
//import { createPool } from 'mysql2';
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
pool.then((r) => r.getConnection().then((connection) => {
    r.releaseConnection(connection);
    console.log('D.B. is connected');
}));
exports.default = pool;
//este codigo si es funcional
/*pool.getConnection()
    .then(connection =>{
        pool.releaseConnection(connection);
        console.log('DB is connected');
    });

el motivo del error de coneccion, que presenta las lineas comentadas en la parte superior, es por la version
de 'promise-mysql', en el tutorial se usa 'promise-mysql@3.3.1' .
*/
