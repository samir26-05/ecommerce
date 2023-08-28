import { productos } from "../../models/productos/productos.js";
import { sequelize } from "../../database.js";
export const GetProducts = async (req, res) => {
  try {
    const result = await productos.findAll({
      attributes: [
        "product_id",
        "name",
        "descripcion",
        "price",
        "stock",
        "img_video",
      ],
      include: [
        {
          model: sequelize.model("size"),
          attributes: ["size"],
        },
        {
          model: sequelize.model("brand"),
          attributes: ["brand"],
        },
        {
          model: sequelize.model("category"),
          attributes: ["category"],
        },
        {
          model: sequelize.model("section"),
        },
      ],
    });
    if (!result) {
      return res
        .status(404)
        .json({ message: "no se encontro ningun producto" });
    }
    res.status(200).json({ message: "Lista de todos los productos", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
