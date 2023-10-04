import { Router } from "express";
import * as Order from "../controllers/Gestion_pedidos/order.controllers.js";
import * as Jwt from "../middlewares/AuthJwt.js";
const router = Router()

router.get('/',[Jwt.validatetoken,Jwt.isAdmin],Order.GetOrder)
router.post('/create',Jwt.validatetoken,Order.CreateOrder)
router.post('/webhook',Order.webhook)
router.get('/user',Jwt.validatetoken, Order.GetUsername)
router.get('/reference/:refe',Jwt.validatetoken, Order.Orden_reference)
router.get('/status/:name',Jwt.validatetoken, Order.GetOrderStatus)
export default router