const { Router } = require('express')
const router = Router();
const {getRespuestas, getRespuestaById, createRespuestas} = require('../controllers/respuestas.controller');

router.get('/reply', getRespuestas);
router.get('/reply/:id', getRespuestaById);
router.post('/reply', createRespuestas);
module.exports = router;