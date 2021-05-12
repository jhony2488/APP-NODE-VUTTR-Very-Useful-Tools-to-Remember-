import { ToolsServices } from '../../services/ToolsServices'

interface CRUD {
  update(req, res): void
}

class ToolsController implements CRUD {
  async update(req, res) {
    const { title, link, description, title_tags } = req.body
    const { id_users, id_tools } = req.params
    const toolsService = new ToolsServices()
    // #swagger.tags = ['Tools']
    // #swagger.description = 'Endpoint para alterar dados de uma ferramenta de um usuário.'
    // #swagger.parameters['id_users'] = { in:'path',description: 'ID do usuário.',required: true, }
    // #swagger.parameters['id_tools'] = { in:'path',description: 'ID da ferramenta.',required: true, }
    /*    #swagger.parameters['body'] = {
                in: 'body',
                description: "Dado necessario para alterar os dados de uma ferramenta",
                required: true,
                schema: { $ref: "#/definitions/UpdateTools" }
        } */
    /* #swagger.responses[401] = {
               schema: { $ref: "#/definitions/ErrorTokenInvalid" },
               description: 'Quando  o token de authenticação não for valido ou quando o token de authenticação não for encontrado'
        } */

    try {
      const result = await toolsService.update(
        id_users,
        id_tools,
        title,
        link,
        description,
        title_tags
      )
      /* #swagger.responses[403] = {
               schema: { $ref: "#/definitions/Error403" },
               description: 'Quando  o usuario ou a ferramenta não for encontrada'
        } */
      if (result == 'User not Found' || result == 'Tools not Found') {
        return res.status(403).json({ message: result })
      }
      /* #swagger.responses[200] = {
               schema: { $ref: "#/definitions/UpdateToolResponse" },
               description: 'Alterar dados de uma ferramentas de um usuário'
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
