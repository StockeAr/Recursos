create database db;

use db;

CREATE TABLE IF NOT EXISTS prueba (
    id int(11) NOT NULL AUTO_INCREMENT,
    descripcion varchar(45),
    ts timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

select * from prueba;

/*alter table prueba drop column ts;
alter table prueba add ts timestamp default CURRENT_TIMESTAMP after descripcion;
describe prueba;*/

insert into prueba (descripcion) values ("agregar prueba8"); 