import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../database/models/User";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dayjs from 'dayjs'
import RefreshToken from "~/database/models/RefreshToken";


class SessionController{
    async execute(req:Request,res:Response){
        const userRepository = getRepository(User)
        const refreshRepository = getRepository(RefreshToken)
        try{
            const existUser = await userRepository.findOne({email:req.body.email})
            if(!existUser){
                
            return res.status(400).json("error")
            }
            const comparePasswords = await bcrypt.compare(req.body.password,existUser.password)
            if(!comparePasswords){
                return res.status(400).json("error password")
            }
            const token = jwt.sign({id:existUser.id},"secrete",{
                expiresIn:'20s'
            })
            const refreshExpired = dayjs().add(15,'second').unix()
            const refresh = await refreshRepository.save({
                expiration:refreshExpired,
                user:existUser
                
            })
            const refreshToken = jwt.sign({id:refresh.id},"secrete",{
                expiresIn:"7d"
            })
            return res.status(200).json({token,refreshToken:refreshToken})

        }catch(e){
            console.log(e)
            return res.status(500).json("error")
        }
    }
}

export default SessionController