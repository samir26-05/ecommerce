import { Orden_compra } from "../../models/Gestion de pedidos/orders.js";

export const GetOrder = async (req, res) => {
  try {
    const result = await Orden_compra.findAll({});

    // Iterar sobre los resultados y convertir el campo "products" en objetos JavaScript
    const parsedResults = result.map((item) => {
      return {
        id_order: item.id_order,
        user_id: item.user_id,
        products: JSON.parse(item.products), // Convierte la cadena JSON en objeto
        discount: item.discount,
        subtotal: item.subtotal,
        total_value: item.total_value,
        id_state: item.id_state,
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
      products: result.products, // Convierte la cadena JSON en objeto
      discount: result.discount,
      subtotal: result.subtotal,
      total_value: result.total_value,
      id_state: result.id_state,
    });
    res.status(200).json({ message: "Orden creada con exito", NewOrder });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const GetOrderId = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Orden_compra.findOne({ where: { id_order: id } });
    if (!result) {
      return res.status(404).json({ message: "Orden no encontrada" });
    }
    const GetProductId = {
      id_order: result.id_order,
      user_id: result.user_id,
      products: JSON.parse(result.products), // Convierte la cadena JSON en objeto
      discount: result.discount,
      subtotal: result.subtotal,
      total_value: result.total_value,
      id_state: result.id_state,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt,
    };
    res.status(200).json(GetProductId);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const CheckoutPago = async (req, res) => {
  try {
    const { UserId } = req;
    const Order = await Orden_compra.findOne({where: {user_id: UserId}});
    if(Order.id_state === 2){
    Order.destroy();
    return res.status(200).json({message: 'Pedido borrado por rechazo del servidor'})
    }
    const Productos = JSON.parse(Order._previousDataValues.products)
  } catch (error) {
    res.status(500).json({ error: error.message})
  }
};
