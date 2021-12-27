import {Router} from 'express'
import RefreshController from '~/Controller/refreshController'
import SessionController from '~/Controller/sessionController'
import UserController from '~/Controller/userController'
import autenticate from '~/middlewares/autenticate'

const routes = Router()

const userController = new UserController()
const sessionController = new SessionController()
const refreshController = new RefreshController()

routes.post("/user",userController.execute)
routes.post("/login",sessionController.execute)
routes.post("/refresh_token",autenticate,refreshController.execute)

export default routes