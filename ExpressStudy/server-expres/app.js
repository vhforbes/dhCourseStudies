const express = require('express')
const app = express()

// Rota produtos em uma variável


// listen inicia o servidor local em determinada porta
app.listen(3000, () => {
  console.log('Server listening on port 3000')
})

app.get('/', (req, res) => {
  res.send('Something')
})