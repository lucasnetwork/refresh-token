import { verify } from 'crypto'
import {NextFunction, Request, Response} from 'express'
import jwt from 'jsonwebtoken'

function autenticate(req:Request,res:Response,next:NextFunction){
    const token = req.headers?.authorization
    if(!token){
        return res.status(500).json("error")
    }
    try{
        const tokenBearer = token.split(" ")[1]
        const verifyToken = jwt.verify(tokenBearer,'secrete')
        next()
    }catch{
        
    }
    try{
        if(!req.body.refreshToken){
            return res.status(500).json("error token")
    
        }
         jwt.verify(req.body.refreshToken,'secrete')
        next()

    }catch{
        return res.status(500).json("error refreshToken token")

    }

}
export default autenticate