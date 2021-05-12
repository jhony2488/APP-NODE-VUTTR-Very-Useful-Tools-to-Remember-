import version from 'project-version'

class DefaultControllers {
  async index(req, res) {
    // #swagger.tags = ['default']
    // #swagger.description = 'Endpoint para ver a versão desta API'

    /* #swagger.responses[401] = {
               schema: { $ref: "#/definitions/ErrorTokenInvalid" },
               description: 'Quando  o token de authenticação não for valido ou quando o token de authenticação não for encontrado'
        } */
    try {
      /* #swagger.responses[200] = {
               schema: { $ref: "#/definitions/DefaultIndex" },
               description: 'Mostra a versão desta API'
        } */
      res.json({ version })
    } catch (err) {
      /* #swagger.responses[400] = {
               schema: { $ref: "#/definitions/Error400" },
               description: 'Quando houver um erro na requisição'
        } */
      return res.status(400).json({ message: err.message })
    }
  }
}

module.exports = new DefaultControllers()
