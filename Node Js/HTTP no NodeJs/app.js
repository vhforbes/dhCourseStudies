const http = require('http')

http.createServer((req, res) => { /// req = require // res = response
  
  res.writeHead(200, {'Content-Type': 'text/plain'}) // Inicio de qualquer pedido
  
    switch(req.url){ // .url identifica o caminho da url digitada
      case "/":
        res.end('Home page') // Final do pedido case 1
        break
      case '/contact':
        res.end('Contact page') // Final do pedido case 2
        break
      default:
        res.end('Not found page') // Final do pedido case 3
        break
    }

}).listen(3000)