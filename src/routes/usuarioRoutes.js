const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/registro', usuarioController.registrarUsuario);
router.put('/:id', usuarioController.atualizarUsuario);

module.exports = router;
