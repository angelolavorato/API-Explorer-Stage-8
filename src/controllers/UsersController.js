const AppError = require('../utils/AppError')

const sqliteConnection = require('../database/sqlite')

class UserController {
  async create(request, response) {
    const { name, email, password } = request.body

    const database = await sqliteConnection()
    const checkUserExists = await database.get(
      'SELECT * FROM users WHERE email = (?)',
      [email]
    )

    if (checkUserExists) {
      throw new AppError('Este email já está em uso')
    }

    return response.status(201).json()
  } //testando status code
}

module.exports = UserController

/** Métodos do UserControllers
 * index -GET para listar vários registros.
 * show -GET para exibir um registro especifico.
 * create -POST para criar um registro.
 * update -PUT para atualizar um registro.
 * delete - DELETE para remover um registro.
 */
