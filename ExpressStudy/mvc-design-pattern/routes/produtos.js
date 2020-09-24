const express = require('express')
const router = express.Router()
const ProdutoController = require('../controllers/ProdutoController') // `..` para subir um diretório ^

router.get('/', ProdutoController.index)
router.get('/criarProduto', ProdutoController.criarProduto)
router.get('/deletarProduto', ProdutoController.deletarProduto)


module.exports = router