import jwt from "jsonwebtoken";
import { SECRET } from "../config.js";
import { User } from "../models/Usuarios/User.js";
import { Roles } from "../models/Usuarios/Roles.js";
export const validatetoken = async (req,res,next) => {
    const accessToken = req.header("accessToken")
    if(!accessToken) return res.json({message: 'Usuario no logueado'})

    try {
        const validtoken = jwt.verify(accessToken,SECRET)
        req.Username = validtoken.username
        req.UserId = validtoken.id;
        req.rol = validtoken.role 
        const user  = await User.findByPk(req.UserId,{attributes: ["user_id","user","email","role_id"]}) 
        if(!user) return res.json({message: 'Usuario no existe'})
        next()
    } catch (error) {
        return res.status(401).json({error: error.message})
    }
}

export const isAdmin = async (req, res, next) => {
    const user = await User.findByPk(req.UserId)
    const roles = await Roles.findOne({where: {role_id : user.role_id}})
    if(roles.rol === 'Admin'){
        next()
    }else{
        return res.status(403).json({message: 'se nesecitan permisos de administrador'})
    }
}