import {Router} from 'express'
import SessionController from '~/Controller/sessionController'
import UserController from '~/Controller/userController'

const routes = Router()

const userController = new UserController()
const sessionController = new SessionController()

routes.post("/user",userController.execute)
routes.post("/login",sessionController.execute)
routes.post("/refresh_token",()=>{
    console.log("refresh_token")
})

export default routes