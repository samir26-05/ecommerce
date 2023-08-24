import { Router } from "express";
import * as Products from '../controllers/products/products.controller.js'
const router = Router()

// listar productos 
router.post('/create',Products.createProduct)
router.get('/update',)

export default router






