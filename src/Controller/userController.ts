import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../database/models/User";
import bcrypt from 'bcrypt'

class UserController{
    async execute(req:Request,res:Response){
        const userRepository = getRepository(User)
        try{
            const passwordHash = await bcrypt.hash(req.body.password,10)
            const user = await userRepository.save({...req.body,password:passwordHash})
            return res.status(200).json(user)

        }catch(e){
            console.log(e)
            return res.status(500).json("error")
        }
    }
}

export default UserController