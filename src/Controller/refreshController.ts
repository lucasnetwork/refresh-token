import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../database/models/User";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dayjs from 'dayjs'
import RefreshToken from "../database/models/RefreshToken";


class RefreshController{
    async execute(req:Request,res:Response){
        const userRepository = getRepository(User)
        const refreshRepository = getRepository(RefreshToken)
        try{
            
            const verifyRefreshToken = jwt.verify(req.body.refreshToken,'secrete')
            const existRefresh = await refreshRepository.findOne(verifyRefreshToken.id,{relations:["user"]})
            console.log(existRefresh)
            if(!existRefresh){
                return res.status(400).json("error")
            }
            const existUser = await userRepository.findOne({id:existRefresh.user.id})
            if(!existUser){
                return res.status(400).json("error")
            }
            const token = jwt.sign({id:existUser.id},"secrete",{
                expiresIn:'20s'
            })
            return res.status(200).json({token})

        }catch(e){
            console.log(e)
            return res.status(500).json("error")
        }
    }
}

export default RefreshController