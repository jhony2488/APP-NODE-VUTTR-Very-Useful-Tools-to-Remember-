import express from 'express'

const { Authentication } = require('./app/middlewares/auth')

const DefaultControllersUsers = require('./app/controllers/DefaultControllers')
const IndexUserController = require('./app/controllers/UsersControllers/GetUserUnicController')
const LoginUserController = require('./app/controllers/UsersControllers/LoginUserController')
const CreateUserController = require('./app/controllers/UsersControllers/CreateUserController')
const UpdateUserController = require('./app/controllers/UsersControllers/UpdateUserController')
const UpdatePassowordUserController = require('./app/controllers/UsersControllers/RedefinedPassowordUserController')
const DeleteUserController = require('./app/controllers/UsersControllers/DeleteUserController')

const GetToolsController = require('./app/controllers/ToolsControllers/GetToolsController')
const CreateToolController = require('./app/controllers/ToolsControllers/CreateToolController')
const UpdateToolController = require('./app/controllers/ToolsControllers/UpdateToolController')
const DeleteToolController = require('./app/controllers/ToolsControllers/DeleteToolController')

const GetTagsController = require('./app/controllers/TagsControllers/GetTagsController')
const CreateTagController = require('./app/controllers/TagsControllers/CreateTagController')
const UpdateTagController = require('./app/controllers/TagsControllers/UpdateTagController')
const DeleteTagController = require('./app/controllers/TagsControllers/DeleteTagController')

const AdminControllerGetUsers = require('./app/controllers/AdminControllers/AdminGetUsersController')
const AdminControllerGetUser = require('./app/controllers/AdminControllers/AdmiGetUnicUserController')

const router = express.Router()
const authentication = new Authentication()

//default
router.get('/', authentication.auth, DefaultControllersUsers.index)

//users
router.get('/users/:id_users', authentication.auth, IndexUserController.index)
router.post('/users/login', authentication.auth, LoginUserController.login)
router.post('/users', authentication.auth, CreateUserController.create)
router.put('/users/:id_users', authentication.auth, UpdateUserController.update)
router.patch(
  '/users/redefined_password/:id_users',
  authentication.auth,
  UpdatePassowordUserController.redefinedPassword
)
router.delete(
  '/users/:id_users',
  authentication.auth,
  DeleteUserController.delete
)

//tools
router.get(
  '/tools/users/:id_users',
  authentication.auth,
  GetToolsController.index
)
router.post(
  '/tools/users/:id_users',
  authentication.auth,
  CreateToolController.create
)
router.put(
  '/tools/:id_tools/users/:id_users',
  authentication.auth,
  UpdateToolController.update
)
router.delete(
  '/tools/:id_tools/users/:id_users',
  authentication.auth,
  DeleteToolController.delete
)

//tags
router.get('/tags', authentication.auth, GetTagsController.index)
router.post('/tags', authentication.auth, CreateTagController.create)
router.put('/tags/:id_tag', authentication.auth, UpdateTagController.update)
router.delete('/tags/:id_tag', authentication.auth, DeleteTagController.delete)

// admin
router.get(
  '/admin/users',
  authentication.authAdmin,
  AdminControllerGetUsers.index
)
router.get(
  '/admin/users/:id_users',
  authentication.authAdmin,
  AdminControllerGetUser.indexOne
)

module.exports = router
