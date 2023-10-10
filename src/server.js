const express = require('express') //importou o express

const app = express() //inicializou o express

app.get('/message/:id/:user', (request, response) => {
  //esse /message é uma nova rota na aplicação

  const { id, user } = request.params

  response.send(`
  Id da mensagem: ${id}.
  Para o usuario: ${user}
  `)
})

app.get('/users', (request, response) => {
  const { page, limit } = request.query

  response.send(`Página: ${page}. Mostrar: ${limit}`)
})

const PORT = 3333 //criou uma constante que definiu o número da porta que a API vai ficar observando
app.listen(PORT, () => console.log(`Server is running on port  ${PORT}`))
