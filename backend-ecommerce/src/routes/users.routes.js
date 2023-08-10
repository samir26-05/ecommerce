import {Router} from "express";
import * as UserControlles from "../controllers/users.controllers.js"
const router = Router();

router.get('/:id',UserControlles.getUsuarioId,)
router.get('/',UserControlles.getUsuarios)
router.post('/register',UserControlles.CrearUsuario)
router.delete('/:id',UserControlles.UserDelete)


export default router