import * as order_detail from "../controllers/Gestion_pedidos/order_detail.controllers.js";
import * as Order from "../controllers/Gestion_pedidos/order.controllers.js";
import * as Jwt from "../middlewares/AuthJwt.js";
import { Router } from "express";
const router = Router();

//routas detalles de la compra   
router.post('/create',Jwt.validatetoken,order_detail.CreateOrden_detail)


// routas de orden de compra 
router.post('/',Jwt.validatetoken,Order.CreateOrder)
export default router