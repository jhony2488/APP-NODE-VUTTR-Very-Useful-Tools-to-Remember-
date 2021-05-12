import { ToolsServices } from '../../services/ToolsServices'

interface CRUD {
  create(req, res): void
}

class ToolsController implements CRUD {
  async create(req, res) {
    const { title, link, description, title_tags } = req.body
    const { id_users } = req.params
    const toolsService = new ToolsServices()
    // #swagger.tags = ['Tools']
    // #swagger.description = 'Endpoint para criar uma ferramenta de um usuário.'
    // #swagger.parameters['id_users'] = { in:'path',description: 'ID do usuário.',required: true, }
    /*    #swagger.parameters['body'] = {
                in: 'body',
                description: "Dado necessario para adicionar uma nova ferramenta",
                required: true,
                schema: { $ref: "#/definitions/CreateTools" }
        } */

    /* #swagger.responses[401] = {
               schema: { $ref: "#/definitions/ErrorTokenInvalid" },
               description: 'Quando  o token de authenticação não for valido ou quando o token de authenticação não for encontrado'
        } */
    try {
      /* #swagger.responses[200] = {
               schema: { $ref: "#/definitions/CreateToolResponse" },
               description: 'Criar uma ferramentas de um usuário'
        } */
      const result = await toolsService.create(
        id_users,
        title,
        link,
        description,
        title_tags
      )
      /* #swagger.responses[403] = {
               schema: { $ref: "#/definitions/Error400" },
               description: 'Quando um usuario que não existe tenta criar uma ferramenta'
        } */
      if (result == 'User not Found') {
        return res.status(403).json({ message: result })
      }
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
