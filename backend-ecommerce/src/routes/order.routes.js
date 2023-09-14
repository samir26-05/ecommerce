import { Router } from "express";
import * as Order from "../controllers/Gestion_pedidos/order.controllers.js";
import * as Jwt from "../middlewares/AuthJwt.js";
const router = Router()

router.get('/',Jwt.validatetoken,Order.GetOrder)
router.post('/create',Jwt.validatetoken,Order.CreateOrder)
router.get('/id/:id',Jwt.validatetoken,Order.GetOrderId)


export default router