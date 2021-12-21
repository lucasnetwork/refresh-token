import {Router} from 'express'

const route = Router()

route.post("/login",()=>{
    console.log("login")
})
route.post("/refresh_token",()=>{
    console.log("refresh_token")
})