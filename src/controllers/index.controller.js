


/*const { response } = require('express');
const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'forum',
    port: '5432'
})

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM usuarios')
    res.status(200).json(response.rows);
};

const getUserById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM usuarios WHERE id_usuario=$1', [id])
    res.json(response.rows);
}

const createUser = async (req, res) => {
    const {nombres, apellidos, email, nick, clave} = req.body;

    const response = await pool.query('INSERT INTO usuarios(nombres, apellidos, email, nick, clave) values($1,$2,$3,$4,$5)',[nombres, apellidos, email, nick, clave]);
    console.log(response);
    res.json({
        messagge: '¡Usuario creado exitosamente!',
        body: {
            user: {nombres, apellidos, email, nick, clave}
        }
    })
};

const updateUser = async(req, res) => {
    const id = req.params.id;
    const {nombres, apellidos, email, nick, clave} = req.body;
    const response = await pool.query('UPDATE usuarios SET nombres=$1, apellidos=$2, email=$3, nick=$4, clave=$5 WHERE id_usuario=$6',
    [
        nombres,
        apellidos,
        email,
        nick, 
        clave,
        id
    ]);
    console.log(response);
    res.json('Datos actualizados exitosamente');
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM usuarios where id_usuario=$1', [id]);
    console.log(response);
    res.json('usuario ${id} eliminiado existosamente');
}
module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
*/