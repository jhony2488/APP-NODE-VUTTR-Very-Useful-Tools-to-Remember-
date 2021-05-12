import { TagsServices } from '../../services/TagsServices'

interface CRUD {
  create(req, res): void
}

class TagsController implements CRUD {
  async create(req, res) {
    const { title } = req.body
    const tagsService = new TagsServices()
    // #swagger.tags = ['Tags']
    // #swagger.description = 'Endpoint para criar uma tag'
    /*    #swagger.parameters['body'] = {
                in: 'body',
                description: "Dado necessario para adicionar uma nova tag",
                required: true,
                schema: { $ref: "#/definitions/CreateTags" }
        } */

    /* #swagger.responses[401] = {
               schema: { $ref: "#/definitions/ErrorTokenInvalid" },
               description: 'Quando  o token de authenticação não for valido ou quando o token de authenticação não for encontrado'
        } */

    try {
      const result = await tagsService.create(title)
      /* #swagger.responses[200] = {
               schema: { $ref: "#/definitions/CreateTagResponse" },
               description: 'Criar uma nova tag'
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

module.exports = new TagsController()
