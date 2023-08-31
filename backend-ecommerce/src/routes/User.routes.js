import { Router } from "express";
import * as User from "../controllers/Login_Users/Login_Register.controllers.js"
const router = Router()
router.post('/',User.CreateUser)
router.post('/login',User.Login)


export default router