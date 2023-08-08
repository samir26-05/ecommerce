import {Router} from "express";
import * as UserControlles from "../controllers/users.controllers.js"
const router = Router();

router.get('/',UserControlles.CrearUsuario)

export default router