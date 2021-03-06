CREATE TABLE usuarios(
    id_usuario SERIAL,
    nombres VARCHAR(50),
    apellidos VARCHAR(50),
    email VARCHAR(25),
    nick VARCHAR(20),
    clave VARCHAR(20),
    CONSTRAINT pk_idUsuario PRIMARY KEY(id_usuario)
);

CREATE TABLE temas (
    id_tema SERIAL,
    id_usuario INTEGER,
    titulo VARCHAR(50),
    mensaje VARCHAR(200),
    fecha DATE,
    respuesta INTEGER,
    CONSTRAINT pk_idTema PRIMARY KEY (id_tema),
    CONSTRAINT fk_idUsuario FOREIGN KEY(id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE respuestas (
    id_respuesta SERIAL,
    id_tema INTEGER,
    id_usuario INTEGER,
    mensaje VARCHAR(200),
    fecha DATE,
    CONSTRAINT pK_idRespuesta PRIMARY KEY(id_respuesta),
    CONSTRAINT fk_idTema FOREIGN KEY(id_tema) REFERENCES temas(id_tema),
    CONSTRAINT fk_idUsuarios FOREIGN KEY(id_usuario)  REFERENCES usuarios(id_usuario)
);

--INSERTAR USUARIOS
INSERT INTO usuario(nombres, apellidos, emai, nick, clave) 
VALUES ('Joel','Cujilema','joelca1945@gmail.com','Joel_C', '9450852Rias&');

--INSERTAR TEMAS
INSERT INTO temas(id_usuario, titulo, mensaje, fecha, respuesta)
VALUES (1,'Desarrollar paginas web', '¿Qué debo aprender para desarrollar paginas web', current_date, 0);

--Borrar tablas
DROP TABLE usuarios
DROP TABLE temas
DROP TABLE respuestas

--Vistas
CREATE VIEW vista_foro
AS SELECT t.titulo, u.nick, t.mensaje, t.fecha, t.respuesta 
FROM temas as t join usuarios as u on (t.id_usuario = u.id_usuario);

CREATE VIEW vista_foro
AS SELECT t.id_tema, t.titulo, u.nick, t.id_usuario, t.mensaje, t.fecha, t.respuesta 
FROM temas as t join usuarios as u on (t.id_usuario = u.id_usuario);

CREATE VIEW vista_respuestas AS 
SELECT r.id_respuesta, r.id_tema, t.nick, r.mensaje, r.fecha from vista_foro as t
join respuestas as r on (t.id_tema=r.id_tema)

--AUMENTAR RESPUESTA
CREATE OR REPLACE FUNCTION actualizar_tema() 
	RETURNS TRIGGER AS $actualizar_tema$ 
	DECLARE
		cantidadRespuesta Integer;
	BEGIN 
		update temas set respuesta = (respuesta +1)
		where temas.id_tema = New."id_tema";
		RETURN NEW;
END; 
$actualizar_tema$ LANGUAGE plpgsql;
	
CREATE TRIGGER actualizar_tema BEFORE INSERT
ON respuestas FOR EACH ROW
EXECUTE PROCEDURE actualizar_tema();

--Prueba del trigger
insert into respuestas(id_tema, id_usuario, mensaje, fecha)
values (4, 1,'Respuesta', current_date);

select * from respuestas
/*
https://programarivm.com/crear-una-base-de-datos-mysql-para-un-foro-de-debate
https://code.tutsplus.com/es/tutorials/how-to-create-a-phpmysql-powered-forum-from-scratch--net-10188
*/