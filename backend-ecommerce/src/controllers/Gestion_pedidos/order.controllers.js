import { Orden_compra } from "../../models/Gestion de pedidos/orders.js";
import { productos } from "../../models/productos/productos.js";
import { order_detail } from "../../models/Gestion de pedidos/order_detail.js";
import { sequelize } from "../../database.js";
import { state } from "../../models/Gestion de pedidos/state.js";

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
        "method",
        "shipment",
        "total",
        "reference",
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
          attributes: ["id_order", "product_id", "amount", "valor"],
        },
      ],
    });
    const result2 =await Promise.all(result[0].order_details.map(async(item)=> {
      const ProductFound = await productos.findOne({where: {product_id: item.product_id}})
      return ProductFound
    })) 
    const parsedResults = result.map((item) => {
      return {
        id_order: item.id_order,
        user_id: item.user.user,
        products:item.order_details.map((detail) => {
          return {
            producto: result2[0].name,
            valor_unitario: result2[0].price,
            cantidad: detail.amount,
            valor: detail.valor,
            img: result2[0].img_video
          };
        }), // Convierte la cadena JSON en objeto
        subtotal: item.subtotal,
        discount: item.discount,
        iva: item.iva,
        metodo: item.method,
        envio: item.shipment,
        total_value: item.total,
        id_state: item.state.state,
        reference: item.reference,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
      };
    });

    res.status(200).json(parsedResults);
  } catch (error) {
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
      shipment: result.shipment,
      total: result.total,
      reference: result.reference,
    });
    const Products = await Promise.all(
      result.products.map(async (products) => {
        const { product_id, stock } = products;
        const price = await productos.findOne({
          where: { product_id: product_id },
        });
        const NewOrderDetails = await order_detail.create({
          id_order: NewOrder.id_order,
          product_id,
          amount: stock,
          valor: stock * price.price,
        });
        return NewOrderDetails;
      })
    );
    return res.status(200).json({
      message: "orden creada con exito",
      orden: NewOrder,
      detail_order: Products,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const webhook = async (req, res) => {
  const result = req.body;
  const orden = await Orden_compra.findOne({
    where: { reference: result.reference_sale },
  });
  if (result.cc_holder === "APPROVED" && orden.id_state == 1) {
    orden.id_state = 3;
    orden.method = result.payment_method_name
    orden.save();
    const product = await order_detail.findAll({
      where: { id_order: orden.id_order },
    });
    const updateStock = product.map(async (value) => {
      const productFound = await productos.findByPk(value.product_id);
      await productos.update(
        {
          stock: productFound.stock - value.amount,
        },
        { where: { product_id: value.product_id } }
      );
    });
    return res.status(200).send("Pago Exitoso");
  } else if (result.cc_holder !== "APPROVED") {
    orden.id_state = 2;
    orden.save();
    return res.status(400).send("Pago rechazado");
  }
  return res.status(200).send("Pago pendiente");
};

export const GetUsername = async (req, res) => {
  try {
    const user = req.UserId;
    const result = await Orden_compra.findAll({
      where : {user_id: user},
      attributes: [
        "id_order",
        "user_id",
        "discount",
        "subtotal",
        "id_state",
        "iva",
        "total",
        "reference",
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
          attributes: ["id_order", "product_id", "amount", "valor"],
        },
      ],
    });
    const result2 =await Promise.all(result[0].order_details.map(async(item)=> {
      const ProductFound = await productos.findOne({where: {product_id: item.product_id}})
      return ProductFound
    })) 
    const parsedResults = result.map((item) => {
      return {
        id_order: item.id_order,
        user_id: item.user.user,
        products:item.order_details.map((detail) => {
          return {
            producto: result2[0].name,
            valor_unitario: result2[0].price,
            cantidad: detail.amount,
            valor: detail.valor,
            img: result2[0].img_video
          };
        }), // Convierte la cadena JSON en objeto
        subtotal: item.subtotal,
        discount: item.discount,
        iva: item.iva,
        metodo: item.method,
        envio: item.shipment,
        total_value: item.total,
        id_state: item.state.state,
        reference: item.reference,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
      };
    });
  res.status(200).json(parsedResults)
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

export const Orden_reference = async (req,res) => {
  try {
  const {refe} = req.params
  const result = await Orden_compra.findOne({
    where : {reference: refe},
    attributes: [
      "id_order",
      "user_id",
      "discount",
      "subtotal",
      "id_state",
      "iva",
      "method",
      "shipment",
      "total",
      "reference",
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
        attributes: ["id_order", "product_id", "amount", "valor"],
      },
    ],
  })
  const orderDetails = Object.values(result.order_details);
  const result2 =await Promise.all(orderDetails.map(async(item)=> {
    const ProductFound = await productos.findOne({where: {product_id: item.product_id}})
    return {
      name: ProductFound.name,
      valor_unitario:ProductFound.price,
      cantidad:item.amount,
      valor:item.valor,
      img: ProductFound.img_video
    }
  })) 
  const parsedResults = {
      id_order: result.id_order,
      user_id: result.user.user,
      products:result2.map((detail) => {
        return {
          producto: detail.name,
          valor_unitario: detail.valor_unitario,
          cantidad: detail.cantidad,
          valor: detail.valor,
          img: detail.img
        };
      }), // Convierte la cadena JSON en objeto
      subtotal: result.subtotal,
        discount: result.discount,
        iva: result.iva,
        metodo: result.method,
        envio: result.shipment,
        total_value: result.total,
        id_state: result.state.state,
        reference: result.reference,
        createdAt: result.createdAt,
        updatedAt: result.updatedAt,
    };
res.status(200).json(parsedResults)
} catch (error) {
  res.status(500).json({error: error.message});
}
};

export const GetOrderStatus = async (req, res) => {
  try {
    const { name } = req.params;
    const stateFound = await state.findOne({ where: { state: name } });
    const result = await Orden_compra.findAll({
      where: { id_state: stateFound.id_state },
      include: [
        {
          model: sequelize.model("state"),
          attributes: ["state"],
        },
        {
          model: sequelize.model("user"),
          attributes: ["user"],
        },
      ],
    });
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ error: error.message})
  }
}

