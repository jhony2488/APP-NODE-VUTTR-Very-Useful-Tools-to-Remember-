import { UsersServices } from '../../services/UsersServices'

interface CRUDUser {
  redefinedPassword(req, res): void
}

class UsersControllers implements CRUDUser {
  async redefinedPassword(req, res) {
    const { password } = req.body
    const { id_users } = req.params
    const userService = new UsersServices()
    // #swagger.tags = ['Users']
    // #swagger.description = 'Endpoint para redefinir senha de um usuário.'
    // #swagger.parameters['id_users'] = { in:'path',description: 'ID do usuário.',required: true, }
    /*    #swagger.parameters['body'] = {
                in: 'body',
                description: "Dado necessario para alterar a senha de um usuário",
                required: true,
                schema: { $ref: "#/definitions/UpdatePasswordUser" }
        } */

    /* #swagger.responses[401] = {
               schema: { $ref: "#/definitions/ErrorTokenInvalid" },
               description: 'Quando  o token de authenticação não for valido ou quando o token de authenticação não for encontrado'
        } */

    try {
      const user = await userService.redefinedPassword(id_users, password)

      /* #swagger.responses[200] = {
               schema: { $ref: "#/definitions/UpdateTagResponse" },
               description: 'Realiza a alteração da senha de um único usuário'
        } */
      res.json(user)
    } catch (err) {
      /* #swagger.responses[400] = {
               schema: { $ref: "#/definitions/Error400" },
               description: 'Quando houver um erro na requisição'
        } */
      return res.status(400).json({ message: err.message })
    }
  }
}

module.exports = new UsersControllers()
