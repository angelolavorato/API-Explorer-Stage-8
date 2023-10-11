const express = require('express') //importou o express

const app = express() //inicializou o express
app.use(express.json())

app.post('/users', (request, response) => {
  const { name, email, password } = request.body

  response.send(`Usuário: ${name}. Email: ${email}. Senha: ${password}`)
})

const PORT = 3333 //criou uma constante que definiu o número da porta que a API vai ficar observando
app.listen(PORT, () => console.log(`Server is running on port  ${PORT}`))
