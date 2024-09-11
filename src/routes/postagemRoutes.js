const express = require('express');
const router = express.Router();
const postagemController = require('../controllers/postagemController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, postagemController.criarPostagem);
router.get('/', postagemController.listarPostagensPorAutor);

module.exports = router;
