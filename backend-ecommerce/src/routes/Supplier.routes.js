import { Router } from "express";
import * as Proveedor from "../controllers/Provedor/Provedor.controlles.js";
import { isAdmin,validatetoken } from "../middlewares/AuthJwt.js";
const router = Router()

// Routas de Productos 
router.post('/create',[validatetoken,isAdmin],Proveedor.CreateProvedor)
router.get('/',[validatetoken,isAdmin],Proveedor.GetProvedor)
router.put('/update/:id',[validatetoken,isAdmin],Proveedor.UpdateProvedor)
router.delete('/delete/:id',[validatetoken,isAdmin],Proveedor.DeleteProvedor)


export default router