const express = require('express') //importou o express

const app = express() //inicializou o express

app.get('/message/:id', (request, response) => {
  //esse /message é uma nova rota na aplicação
  response.send(`Id da mensagem: ${request.params.id}`)
})

const PORT = 3333 //criou uma constante que definiu o número da porta que a API vai ficar observando
app.listen(PORT, () => console.log(`Server is running on port  ${PORT}`))
