import {Router} from 'express'
import UserController from '~/Controller/userController'

const routes = Router()

const userController = new UserController()

routes.post("/login",userController.execute)
routes.post("/refresh_token",()=>{
    console.log("refresh_token")
})

export default routes