import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../database/models/User";

class UserController{
    async execute(req:Request,res:Response){
        const userRepository = getRepository(User)
        try{
            const user = await userRepository.save(req.body)
            return res.status(200).json(user)

        }catch(e){
            console.log(e)
            return res.status(500).json("error")
        }
    }
}

export default UserController