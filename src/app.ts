export {}

import express from 'express'
import bodyParser from 'body-parser'
import swaggerUi from 'swagger-ui-express'
const swaggerFile = require('../swagger_output.json')

class AppController {
  public express
  public port: string
  constructor() {
    this.express = express()

    this.bodyParser()
    this.middleware()
    this.routes()
    this.documemtation()
  }
  middleware() {
    this.express.use(express.json())
  }
  routes() {
    this.express.use(require('./routes'))
  }
  bodyParser() {
    this.express.use(bodyParser.urlencoded({ extended: false }))
    this.express.use(bodyParser.json())
  }
  documemtation() {
    this.express.use(
      '/documentation',
      swaggerUi.serve,
      swaggerUi.setup(swaggerFile)
    )
  }
  server() {
    this.express.listen(3000, () => {
      console.log('servidor rodando')
    })
  }
}

module.exports = new AppController()
