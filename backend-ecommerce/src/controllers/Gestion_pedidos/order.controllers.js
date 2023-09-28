import { Orden_compra } from "../../models/Gestion de pedidos/orders.js";
import { productos } from "../../models/productos/productos.js";
import { state } from "../../models/Gestion de pedidos/state.js";
import { sequelize } from "../../database.js";
export const GetOrder = async (req, res) => {
  try {
    const result = await Orden_compra.findAll({
      attributes: [
        "id_order",
        "user_id",
        "products",
        "discount",
        "subtotal",
        "total_value",
        "id_state",
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
          attributes: ["user"]
        }
      ],
    });
    const parsedResults = result.map((item) => {
      return {
        id_order: item.id_order,
        user_id: item.user.user,
        products: JSON.parse(item.products), // Convierte la cadena JSON en objeto
        discount: item.discount,
        subtotal: item.subtotal,
        total_value: item.total_value,
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
      products: result.products, // Convierte la cadena JSON en objeto
      discount: result.discount,
      subtotal: result.subtotal,
      iva: result.iva,
      total_value: result.total_value,
      id_state: result.id_state,
    });
    res.status(200).json({ message: "Orden creada con exito", NewOrder });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const GetOrderUser = async (req, res) => {
  try {
    const { UserId } = req;
    const result = await Orden_compra.findOne({ where: { user_id: UserId } });
    if (!result) {
      return res.status(404).json({ message: "Orden no encontrada" });
    }
    const estado = await state.findOne({
      where: { id_state: result.id_state },
    });
    const GetProductId = {
      id_order: UserId,
      user_id: result.user,
      products: JSON.parse(result.products), // Convierte la cadena JSON en objeto
      discount: result.discount,
      subtotal: result.subtotal,
      total_value: result.total_value,
      id_state: estado.state,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt,
    };
    res.status(200).json(GetProductId);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const GetOrderStatus = async(req, res) => {
  try {
    const {name} = req.params
    const stateFound = await state.findOne({where: {state: name}})
    const result = await Orden_compra.findAll({ where: { id_state: stateFound.id_state },
      include: [
        {
          model: sequelize.model("state"),
          attributes: ["state"],
        },
        {
          model: sequelize.model("user"),
          attributes: ["user"]
        }
      ]});
    const parsedResults = result.map((item) => {
      return {
        id_order: item.id_order,
        user_id: item.user.user,
        products: JSON.parse(item.products), // Convierte la cadena JSON en objeto
        discount: item.discount,
        subtotal: item.subtotal,
        total_value: item.total_value,
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
}

export const CheckoutPago = async (req, res) => {
  try {
    const { UserId } = req;
    const Order = await Orden_compra.findOne({ where: { user_id: UserId } });
    if (Order.id_state === 2) {
      Order.destroy();
      return res
        .status(200)
        .json({ message: "Pedido borrado por rechazo del servidor" });
    }
    const Found = JSON.parse(Order.products);
    if (Order.id_state === 3) {
      const result = Found.map(async (value) => {
        const FoundProduct = await productos.findByPk(value.product_id);
        console.log(value.stock);
        await productos.update(
          {
            stock: FoundProduct.stock - value.stock,
          },
          { where: { product_id: value.product_id } }
        );
      });
      res.status(200).json({ message: "El pago se hizo Exitoso" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
