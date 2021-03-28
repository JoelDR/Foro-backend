const { response } = require('express');
const {pool} = require('../database/BD');

const getRespuestas = async (req, res) => {
    const response = await pool.query('SELECT * FROM vista_respuestas')
    res.status(200).json(response.rows);
};

const getRespuestaById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM vista_respuestas WHERE id_tema=$1', [id])
    res.json(response.rows);
}

const createRespuestas = async (req, res) => {
    const {id_tema, id_usuario, mensaje} = req.body;
    const response = await pool.query('INSERT INTO respuestas(id_tema, id_usuario, mensaje, fecha) values($1,$2,$3,current_date)',[id_tema, id_usuario, mensaje]);
    console.log(response);
    res.json({
        messagge: '¡Respuesta registrada exitosamente!',
        body: {
            replies: {id_tema, id_usuario, mensaje}
        }
    })
};

module.exports = {
    getRespuestas,
    getRespuestaById,
    createRespuestas,
}