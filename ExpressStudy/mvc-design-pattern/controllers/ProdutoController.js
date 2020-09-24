

const ProdutoController = {
  index: (req, res) => {
    res.send('Products index')
  },
  criarProduto: (req, res) => {
    res.send('Criando produto')
  },
  deletarProduto: (req, res) => {
    res.send('Deletando produto')
  }
}

module.exports = ProdutoController