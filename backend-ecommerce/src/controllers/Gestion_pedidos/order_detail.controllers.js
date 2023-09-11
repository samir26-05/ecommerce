import { productos } from "../../models/productos/productos.js";
import { User } from "../../models/Usuarios/User.js";
import { Orden_compra } from "../../models/Gestion de pedidos/orders.js";
import { detalle_compra } from "../../models/Gestion de pedidos/order_detail.js";
export const CreateOrden_detail = async (req, res) => {
  try {
    const id = req.UserId;
    const producto = req.body;
    const NewOrden = await Promise.all(
      producto.map(async (data) => {
        const { producto_id, cantidad } = data;
        console.log(producto_id);
        const ProductFound = await productos.findOne({
          where: { product_id: producto_id },
        });
        const Neworder = await detalle_compra.create({
          user_id: id,
          product_id: producto_id,
          amount: cantidad,
          total_value: ProductFound.price * cantidad,
        });
      })
    );
    res.status(200).json({ message: "Orden creado con exito" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};
