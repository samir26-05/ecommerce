import { Router } from "express";
import * as Product from "../controllers/Productos/Productes.controllers.js";
import { uploads } from "../middlewares/multer.js";
const router = Router()

// listar productos 
router.post('/create',uploads, Product.CrearProductshirts)
router.get('/:name?', Product.getProductshirtsName)
router.get('/',Product.getProductosCamisas)

export default router






