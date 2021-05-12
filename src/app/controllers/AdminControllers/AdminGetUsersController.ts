export {}

import { AdminServices } from '../../services/AdminServices'

interface Admin {
  index(req, res): void
}

class AdminControllersUsers implements Admin {
  async index(req, res) {
    const { page } = req.query
    const adminServices = new AdminServices()
    /*
        #swagger.tags = ['Admin']
        #swagger.description = 'Endpoint para obter os dados de todos os usuarios'
    */
    /*    #swagger.parameters['page'] = {
                in: 'query',
                description: "paramêtro de paginação",
        } */

    /* #swagger.responses[401] = {
               schema: { $ref: "#/definitions/ErrorAdmin" },
               description: 'Quando  o token de authenticação não for valido ou quando o token de authenticação não for encontrado ou quando o usuário não foi encontrado ou quando o id do usuário está indefinido ou quando o usuário não e admin'
        } */

    try {
      const users = await adminServices.index(page)
      /* #swagger.responses[200] = {
               schema: { $ref: "#/definitions/AdminUserGet" },
               description: 'Pega os dados de todos os usuários'
        } */
      return res.json(users)
    } catch (err) {
      /* #swagger.responses[400] = {
               schema: { $ref: "#/definitions/Error400" },
               description: 'Quando houver um erro na requisição'
        } */

      return res.status(400).json({ message: err.message })
    }
  }
}

module.exports = new AdminControllersUsers()
