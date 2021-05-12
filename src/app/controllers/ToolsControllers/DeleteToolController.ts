import { ToolsServices } from '../../services/ToolsServices'

interface CRUD {
  delete(req, res): void
}

class ToolsController implements CRUD {
  async delete(req, res) {
    const { id_users, id_tools } = req.params
    const toolsService = new ToolsServices()
    // #swagger.tags = ['Tools']
    // #swagger.description = 'Endpoint para deletar uma ferramenta de um usuário.'
    // #swagger.parameters['id_users'] = { in:'path',description: 'ID do usuário.',required: true, }
    // #swagger.parameters['id_tools'] = { in:'path',description: 'ID da ferramenta.',required: true, }

    /* #swagger.responses[401] = {
               schema: { $ref: "#/definitions/ErrorTokenInvalid" },
               description: 'Quando  o token de authenticação não for valido ou quando o token de authenticação não for encontrado'
        } */

    try {
      const result = await toolsService.delete(id_users, id_tools)
      /* #swagger.responses[200] = {
               schema: { $ref: "#/definitions/Delete" },
               description: 'Deletar Usuário'
        } */
      /* #swagger.responses[406] = {
               schema: { $ref: "#/definitions/Error406" },
               description: 'Quando os dados fornecidos não alcancarem a expectativa'
        } */
      if (
        result == 'User not Found' ||
        result == 'Tools not Found' ||
        result == 'Invalid Id'
      ) {
        return res.status(406).json({ message: result })
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
