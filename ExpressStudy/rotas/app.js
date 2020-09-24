const express = require('express')
const { use } = require('./routes/produtos')
const app = express()
const rotaProdutos = require('./routes/produtos') // Armazena o modulo exportado em uma variável



app.use('/produtos', rotaProdutos); // Qualquer solicitação do caminho '/produtos' deve ser respondida pela rotaProdutos

app.listen(3000, () => {
  console.log('Server on port 3000')
})