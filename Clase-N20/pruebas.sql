-- Comentarios 
-- Creacion de una base de datos

create database prueba81;
-- eliminar base de datos
drop database prueba81;

-- ya este creada la base de datos 

create database if not exists prueba;
CREATE DATABASE IF NOT EXISTS prueba81;

use prueba81;

-- preguntas si existe elimina
drop database if exists prueba81;


-- create de tabla

create table usuarios(
id int primary key auto_increment,
usuarios varchar(12) not null,
nombre varchar(15) not null,
edad tinyint(3) not null
);

-- modificar una columna
ALTER TABLE `prueba81`.`usuarios` 
CHANGE COLUMN `nombre` `name` VARCHAR(15) NOT NULL ;

-- agregar columnas 
alter table usuarios 
add column apellido varchar(15) not null;

alter table usuarios 
add column direccion varchar(25);

-- descricion de la table
describe usuarios; 

-- ver el contenido de tabla
select * 
from  usuarios;
-- where 

-- Vaciar la table 
truncate usuarios; 

drop table usuarios; 
