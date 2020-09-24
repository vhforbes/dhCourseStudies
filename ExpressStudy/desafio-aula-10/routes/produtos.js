const express = require('express')
const router = express.Router()

router.get('/:nome/:preco/:quantidade/:codigo', (req, res) => {
  let { nome, preco, quantidade, codigo } = req.params
  console.log(req.query)

  let produto = {
    nome,
    preco,
    quantidade,
    codigo,
  }

  res.send(produto)
})

router.get('/', (req, res) => {
  res.send(req.query)
})


// /:nome

module.exports = router