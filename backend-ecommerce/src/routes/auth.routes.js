import { Router } from "express";
import * as Login from "../controllers/Login_register/auth.controllers.js";
const router = Router();

router.post("/", Login.LoginUser);
export default router;
