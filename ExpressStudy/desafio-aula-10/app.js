const express = require('express')
const rotaProdutos = require('./routes/produtos')
const app = express()

app.listen(3000, () => {
  console.log('listening')
})

app.use('/produto', rotaProdutos)