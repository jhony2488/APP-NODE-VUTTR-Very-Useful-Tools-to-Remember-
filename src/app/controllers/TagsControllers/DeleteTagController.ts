import { TagsServices } from '../../services/TagsServices'

interface CRUD {
  delete(req, res): void
}

class TagsController implements CRUD {
  async delete(req, res) {
    const { id_tag } = req.params

    const tagsService = new TagsServices()
    // #swagger.tags = ['Tags']
    // #swagger.description = 'Endpoint para deletar uma tag'
    /*    #swagger.parameters['id_tag'] = {
                in: 'path',
                description: "id da tag",
                required: true,
        } */

    /* #swagger.responses[401] = {
               schema: { $ref: "#/definitions/ErrorTokenInvalid" },
               description: 'Quando  o token de authenticação não for valido ou quando o token de authenticação não for encontrado'
        } */

    try {
      const result = await tagsService.delete(id_tag)
      /* #swagger.responses[200] = {
               schema: { $ref: "#/definitions/Delete" },
               description: 'Deletar uma tag'
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
