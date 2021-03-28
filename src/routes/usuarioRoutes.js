const { Router } = require('express')
const router = Router();
const {getUsers, createUser, getUserById, updateUser,deleteUser} = require('../controllers/usuarios.controller');

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);
module.exports = router;