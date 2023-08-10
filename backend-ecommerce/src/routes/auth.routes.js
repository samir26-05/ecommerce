import { Router } from "express";
import * as Login from "../controllers/auth.controllers.js";
const router = Router();

router.get("/", Login.LoginUser);
export default router;
