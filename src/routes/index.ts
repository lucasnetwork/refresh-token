import {Router} from 'express'

const routes = Router()

routes.post("/login",()=>{
    console.log("login")
})
routes.post("/refresh_token",()=>{
    console.log("refresh_token")
})

export default routes