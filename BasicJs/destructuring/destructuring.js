// Desestruturação de um array

let array = [0, 1, 2, 3, 4]

  // Cria uma variável para cada um na posicao do array
let [ valor0, valor1, valor2 ] = array


// Desestruturação de um objeto

let objeto = {
  nome: 'Victor',
  idade: 24,
  profissao: `programador`
}

// Cria as varíavel dentro do {} e da o valor da key
let { test, idade } = objeto

// idade = 24
// test = undefined

