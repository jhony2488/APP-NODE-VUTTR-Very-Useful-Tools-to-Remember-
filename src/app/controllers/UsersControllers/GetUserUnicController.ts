import { UsersServices } from '../../services/UsersServices'

interface CRUDUser {
  index(req, res): void
}

class UsersController implements CRUDUser {
  async index(req, res) {
    const { id_users } = req.params
    const userService = new UsersServices()
    // #swagger.tags = ['Users']
    // #swagger.description = 'Endpoint para obter os dados de um  usuário.'
    // #swagger.parameters['id_users'] = { in:'path',description: 'ID do usuário.',required: true, }

    /* #swagger.responses[401] = {
               schema: { $ref: "#/definitions/ErrorTokenInvalid" },
               description: 'Quando  o token de authenticação não for valido ou quando o token de authenticação não for encontrado'
        } */

    try {
      const result = await userService.index(id_users)
      /* #swagger.responses[200] = {
               schema: { $ref: "#/definitions/User" },
               description: 'Pegar informações de um único usuário'
        } */
      return res.json(result)
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
