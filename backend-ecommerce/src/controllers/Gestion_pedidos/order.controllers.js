import { Orden_compra } from "../../models/Gestion de pedidos/orders.js";
import { productos } from "../../models/productos/productos.js";
import { order_detail } from "../../models/Gestion de pedidos/order_detail.js";
import { sequelize } from "../../database.js";
export const GetOrder = async (req, res) => {
  try {
    const result = await Orden_compra.findAll({
      attributes: [
        "id_order",
        "user_id",
        "discount",
        "subtotal",
        "id_state",
        "iva",
        "total",
        "createdAt",
        "updatedAt",
      ],
      include: [
        {
          model: sequelize.model("state"),
          attributes: ["state"],
        },
        {
          model: sequelize.model("user"),
          attributes: ["user"],
        },
        {
          model: sequelize.model("order_detail"),
          attributes: ["id_order","product_id","amount","valor"]
        }
      ],
    });
    const parsedResults = result.map((item) => {
      return {
        id_order: item.id_order,
        user_id: item.user.user,
        products: item.order_details, // Convierte la cadena JSON en objeto
        subtotal: item.subtotal,
        discount: item.discount,
        iva:item.iva,
        total_value: item.total,
        id_state: item.state.state,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
      };
    });

    res.status(200).json(parsedResults);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const CreateOrder = async (req, res) => {
  try {
    const { UserId } = req;
    const result = req.body;
    const NewOrder = await Orden_compra.create({
      user_id: UserId,
      subtotal: result.subtotal,
      discount: result.discount, // Convierte la cadena JSON en objeto
      iva: result.iva,
      total: result.total,
    });
    const Products = await Promise.all(
      result.products.map(async(products)=>{
        const {product_id,stock} =  products;
        const price = await productos.findOne({where: {product_id: product_id}})
        console.log(price)
        if (stock > price.stock) {
          return res.status(404).json({message:`El stock del producto con el ID ${product_id} es insuficiente`});
        }
        const NewOrderDetails = await order_detail.create({
          id_order: NewOrder.id_order,
          product_id,
          amount: stock,
          valor: stock*price.price
        })
        return NewOrderDetails;
      })
    )
  res.status(200).json({
    message: 'orden creada con exito',
    orden: NewOrder,
    detail_order: Products
  })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
