const { Router } = require('express')

const usersRoutes = Router()

usersRoutes.post('/', (request, response) => {
  const { name, email, password } = request.body

  response.send(`Usuário: ${name}. Email: ${email}. Senha: ${password}`)
})
module.exports = usersRoutes
