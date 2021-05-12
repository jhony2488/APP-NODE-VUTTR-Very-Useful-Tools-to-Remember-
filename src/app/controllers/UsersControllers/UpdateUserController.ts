import { UsersServices } from '../../services/UsersServices'

interface CRUDUser {
  update(req, res): void
}

class UsersController implements CRUDUser {
  async update(req, res) {
    const { name, email, codeSecret } = req.body
    const { id_users } = req.params
    const userService = new UsersServices()
    // #swagger.tags = ['Users']
    // #swagger.description = 'Endpoint para alterar os dados de um usuário.'
    // #swagger.parameters['id_users'] = { in:'path',description: 'ID do usuário.',required: true, }
    /*    #swagger.parameters['body'] = {
                in: 'body',
                description: "Dado necessario para alterar nome e email de um usuário",
                required: true,
                schema: { $ref: "#/definitions/UpdateUser" }
        } */

    /* #swagger.responses[401] = {
               schema: { $ref: "#/definitions/ErrorTokenInvalid" },
               description: 'Quando  o token de authenticação não for valido ou quando o token de authenticação não for encontrado'
        } */

    try {
      /* #swagger.responses[200] = {
               schema: { $ref: "#/definitions/UpdateTagResponse" },
               description: 'Realiza a alteração dos dados de um único usuário'
        } */
      let user
      if (codeSecret) {
        user = await userService.update(id_users, name, email, codeSecret)
      } else {
        user = await userService.update(id_users, name, email)
      }
      /* #swagger.responses[418] = {
               schema: { $ref: "#/definitions/Error400" },
               description: 'Quando o cliente fornecer email que já esta cadastrado por outro usuário'
        } */
      if (user == 'another user has this email') {
        return res.status(418).json({ message: user })
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
