import { Router } from "express";
import * as User from "../controllers/Login_Users/Login_Register.controllers.js"
import * as Auth from "../controllers/Login_Users/auth.controllers.js";
import * as Jwt from "../middlewares/AuthJwt.js";
const router = Router()
router.post('/',User.CreateUser)
router.post('/login',User.Login)
router.get('/User',[Jwt.validatetoken,Jwt.isAdmin],User.GetUsers)

// routas de autiticacion 
router.get('/auth',Jwt.validatetoken,Auth.TokenAccess)
export default router