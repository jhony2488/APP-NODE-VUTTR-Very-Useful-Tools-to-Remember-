import { ToolsServices } from '../../services/ToolsServices'

interface CRUD {
  index(req, res): void
}

class ToolsController implements CRUD {
  async index(req, res) {
    const { id_users } = req.params
    const { tag, page } = req.query

    const toolsService = new ToolsServices()
    // #swagger.tags = ['Tools']
    // #swagger.description = 'Endpoint para obter todas as ferramentas de um usuário.'
    // #swagger.parameters['id_users'] = { in:'path',description: 'ID do usuário.',required: true, }
    /*    #swagger.parameters['tag'] = {
                in: 'query',
                description: "nome da tag, para se fazer a pesquisa de quais ferramentas possuem a tag enviada",
        } */
    /*    #swagger.parameters['page'] = {
                in: 'query',
                description: "paramêtro de paginação",
        } */

    /* #swagger.responses[401] = {
               schema: { $ref: "#/definitions/ErrorTokenInvalid" },
               description: 'Quando  o token de authenticação não for valido ou quando o token de authenticação não for encontrado'
        } */

    try {
      let result = null
      if (tag && page) {
        result = await toolsService.index(id_users, page, tag)
      } else if (page) {
        result = await toolsService.index(id_users, page)
      } else if (tag) {
        result = await toolsService.index(id_users, 1, tag)
      } else {
        result = await toolsService.index(id_users)
      }

      /* #swagger.responses[200] = {
               schema: { $ref: "#/definitions/GetTools" },
               description: 'Obter todas as ferramentas de um único usuário'
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

module.exports = new ToolsController()
