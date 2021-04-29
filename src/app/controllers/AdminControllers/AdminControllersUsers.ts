export {}

import { AdminServices } from '../../services/AdminServices'

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: '.env.development',
  })
} else {
  require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
  })
}

interface Admin {
  index(req, res): void
}

class AdminControllersUsers implements Admin {
  async index(req, res) {
    const { page } = req.query
    const adminServices = new AdminServices()
    try {
      const users = await adminServices.index(page)

      return res.json(users)
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }
  async indexOne(req, res) {
    const { id_users } = req.params
    const adminServices = new AdminServices()
    try {
      const users = await adminServices.indexOne(id_users)

      return res.json(users)
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }
}

module.exports = new AdminControllersUsers()
