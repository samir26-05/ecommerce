import { Router } from "express";
import * as Order from "../controllers/Gestion_pedidos/order.controllers.js";
import * as Jwt from "../middlewares/AuthJwt.js";
const router = Router()

router.get('/',Jwt.validatetoken,Order.GetOrder)
router.post('/create',Jwt.validatetoken,Order.CreateOrder)
router.get('/name',Jwt.validatetoken,Order.GetOrderUser)
router.get('/chekout',Jwt.validatetoken,Order.CheckoutPago)

export default router