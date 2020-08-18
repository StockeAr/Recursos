import mysql from 'promise-mysql';
import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.then((r:any)=>r.getConnection().then((connection:any)=>{
    r.releaseConnection(connection);
    console.log('D.B. is connected');
}));

/*pool.getConnection()
    .then(connection =>{
        pool.releaseConnection(connection);
        console.log('DB is connected');
    });*/



// el motivo del error de coneccion, que presenta las lineas comentadas en la parte superior, es por la version 
// de 'promise-mysql', en el tutorial se usa 'promise-mysql@3.3.1' .

export default pool;    
