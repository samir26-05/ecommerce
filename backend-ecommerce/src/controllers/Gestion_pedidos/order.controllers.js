import { detalle_compra } from "../../models/Gestion de pedidos/order_detail.js";
import { sequelize } from "../../database.js";
import { Orden_compra } from "../../models/Gestion de pedidos/orders.js";

export const CreateOrder = async (req,res) =>{
    try {
        const id = req.UserId
        const {discount} = req.body
        const results = await detalle_compra.findAll({
            where: {
                user_id: id
            },
            attributes: [
                'user_id',
                [sequelize.fn('SUM', sequelize.col('total_value')), 'total_pedido']
            ],
            group: ['user_id']
        });
        const Subtotal = results[0]._previousDataValues.total_pedido
        const SubtotalConDescuento = discount ? Subtotal * (1 - discount / 100) : Subtotal;
        const Orden = Orden_compra.create({
        user_id: id,
        discount: discount || 0,
        subtotal: Subtotal,
        total_value: SubtotalConDescuento
    })
    res.status(200).json({message: 'Orden creada',Orden})
    } catch (error) {
    console.log(error)
    res.status(500).json({message: error.message})
    }
}