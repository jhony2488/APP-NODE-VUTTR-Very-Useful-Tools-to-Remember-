import { TagsServices } from '../../services/TagsServices'

interface CRUD {
  index(req, res): void
}

class TagsControllers implements CRUD {
  async index(req, res) {
    const { page } = req.query
    const tagsService = new TagsServices()
    // #swagger.tags = ['Tags']
    // #swagger.description = 'Endpoint para obter todas as tags já criadas.'
    /*    #swagger.parameters['page'] = {
                in: 'query',
                description: "paramêtro de paginação",
        } */

    /* #swagger.responses[401] = {
               schema: { $ref: "#/definitions/ErrorTokenInvalid" },
               description: 'Quando  o token de authenticação não for valido ou quando o token de authenticação não for encontrado'
        } */

    try {
      const result = await tagsService.index(page)
      /* #swagger.responses[200] = {
               schema: { $ref: "#/definitions/GetTags" },
               description: 'Obter todas as tags'
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

module.exports = new TagsControllers()
