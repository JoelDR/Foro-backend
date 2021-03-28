const { Router } = require('express')
const router = Router();
const {getTopic, createTopic, getTopicById, updateTopic,deleteTopic, getTopicUser} = require('../controllers/temas.controller');

router.get('/tema', getTopic);
router.get('/tema/:id', getTopicById);
router.get('/temas', getTopicUser);
router.post('/tema', createTopic);
router.delete('/tema/:id', deleteTopic);
router.put('/tema/:id', updateTopic);
module.exports = router;