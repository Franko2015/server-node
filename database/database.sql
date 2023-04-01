CREATE SCHEMA ngProgramas;

USE ngProgramas;

CREATE TABLE programas (
 id INT(11) NOT NULL,
 titulo VARCHAR(45),
 descripcion VARCHAR(100),
 imagen VARCHAR(400)
);