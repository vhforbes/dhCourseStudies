let express = require('express')
let router = express.Router()

// Nesse arquivo eu configuro toda a pagina produtos 

// Raiz dos produtos- inicio
router.get('/', (req, res) => {
  res.send('Produtos')
})

// Detalhes do produto
router.get('/:id', (req, res) => {
  productId = req.params.id // Pega o final da URL e armazena em uma variável
  res.send(`Produto numero: ${productId}`)
})

module.exports = router