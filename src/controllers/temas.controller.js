const { response } = require('express');
const {pool} = require('../database/BD');

const getTopic = async (req, res) => {
    const response = await pool.query('SELECT * FROM vista_foro')
    res.status(200).json(response.rows);
};

const getTopicUser = async (req, res) => {
    const response = await pool.query('SELECT * FROM vista_foro')
    res.status(200).json(response.rows);
};

const getTopicById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM temas WHERE id_tema=$1', [id])
    res.json(response.rows);
}

const createTopic = async (req, res) => {
    const {id_usuario, titulo, mensaje,  respuesta} = req.body;
    const response = await pool.query('INSERT INTO temas(id_usuario, titulo, mensaje, fecha, respuesta) values($1,$2,$3,current_date,$4)',[id_usuario, titulo, mensaje, respuesta]);
    console.log(response);
    res.json({
        messagge: '¡Tema creado exitosamente!',
        body: {
            user: {id_usuario, titulo, mensaje,  respuesta}
        }
    })
};

const updateTopic = async(req, res) => {
    const id = req.params.id;
    const {titulo, mensaje,  respuesta} = req.body;
    const response = await pool.query('UPDATE temas SET titulo=$1, mensaje=$2, respuesta=$3 WHERE id_tema=$4',
    [
        titulo, mensaje,  respuesta, id
    ]);
    console.log(response);
    res.json('Datos actualizados exitosamente');
}

const deleteTopic = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM usuarios where id_tema=$1', [id]);
    console.log(response);
    res.json('Tema ${id} eliminiado existosamente');
}

module.exports = {
    getTopic,
    getTopicById,
    createTopic,
    updateTopic,
    deleteTopic,
    getTopicUser,
}