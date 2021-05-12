import { UsersServices } from '../../services/UsersServices'

interface CRUDUser {
  delete(req, res): void
}

class UsersController implements CRUDUser {
  async delete(req, res) {
    const { id_users } = req.params
    const userService = new UsersServices()
    // #swagger.tags = ['Users']
    // #swagger.description = 'Endpoint para deletar um usuário.'
    // #swagger.parameters['id_users'] = { in:'path',description: 'ID do usuário.',required: true, }

    /* #swagger.responses[401] = {
               schema: { $ref: "#/definitions/ErrorTokenInvalid" },
               description: 'Quando  o token de authenticação não for valido ou quando o token de authenticação não for encontrado'
        } */

    try {
      const user = await userService.delete(id_users)
      if (user == 'Invalid User uuid') {
        return res.json({ message: user })
      }
      /* #swagger.responses[200] = {
               schema: { $ref: "#/definitions/Delete" },
               description: 'Realiza a exclusão de um único usuário'
        } */
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
