const express = require('express')
const app = express()
const rotaProdutos = require('./routes/produtos')

app.listen(3000, () => {
  console.log('listening on port 3000')
})

app.use('/produtos', rotaProdutos)