import { Router } from "express";
import * as Product from "../controllers/Productos/Productes.controllers.js";
import { uploadFile } from "../controllers/Productos/uploads.controllers.js";
import { multerUpload } from "../middlewares/multer.js";
const router = Router()

// listar productos 
router.post('/create', Product.CrearProductshirts)
router.get('/name', Product.getProductshirtsName)
router.get('/',Product.getProductosCamisas)
router.post('/upload',multerUpload.single("file"),uploadFile)

export default router






