import { UsersServices } from '../../services/UsersServices'

interface CRUDUser {
  create(req, res): void
}

class UsersController implements CRUDUser {
  async create(req, res) {
    const { name, email, password, codeSecret } = req.body
    const userService = new UsersServices()
    // #swagger.tags = ['Users']
    // #swagger.description = 'Endpoint para criação de um usuário.'
    /*    #swagger.parameters['body'] = {
                in: 'body',
                description: "Dado necessario para adicionar um novo usuário",
                required: true,
                schema: { $ref: "#/definitions/AddUser" }
        } */

    /* #swagger.responses[401] = {
               schema: { $ref: "#/definitions/ErrorTokenInvalid" },
               description: 'Quando  o token de authenticação não for valido ou quando o token de authenticação não for encontrado'
        } */

    try {
      /* #swagger.responses[200] = {
               schema: { $ref: "#/definitions/CreateUserResponse" },
               description: 'Realiza a criação de um usuário'
        } */
      let user

      if (codeSecret != null && codeSecret != undefined && codeSecret != NaN) {
        user = await userService.create(name, email, password, codeSecret)
      } else {
        user = await userService.create(name, email, password)
      }
      /* #swagger.responses[406] = {
               schema: { $ref: "#/definitions/Error406" },
               description: 'Quando o cliente fornecer email que já esta cadastrado por outro usuário'
        } */
      if (user == 'Esse email já esta cadastrado') {
        return res.status(406).json({ message: user })
      }

      return res.json(user)
    } catch (err) {
      /* #swagger.responses[400] = {
               schema: { $ref: "#/definitions/Error400" },
               description: 'Quando houver um erro na requisição'
        } */
      return res.status(400).json({ message: err.message })
    }
  }
}

module.exports = new UsersController()
