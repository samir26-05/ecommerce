import { verify } from "jsonwebtoken";
import { SECRET } from "../config";
import { User } from "../models/Usuarios/User.js";
import { Roles } from "../models/Usuarios/Roles";
export const validatetoken = async (req,res,next) => {
    const accessToken = req.header("accessToken")
    if(!accessToken) return res.json({message: 'Usuario no logueado'})

    try {
        const validtoken = verify(accessToken,SECRET)
        req.UserId = validtoken.user_id; 
        const user  = await User.findById(req.UserId,{password: 0}) 
        if(!user) return res.json({message: 'Usuario no existe'})
        next()
    } catch (error) {
        return res.status(401).json({error: error.message})
    }
}

export const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.UserId)
    const roles = await Roles.findOne({where: {role_id : user.role_id}})
}