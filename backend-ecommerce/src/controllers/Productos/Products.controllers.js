import { productos } from "../../models/productos/productos.js";
import { sequelize } from "../../database.js";
import { ValidRegisterProduct } from "../../schemas/productos/CreateProduct.js";
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

export const CreateProduct = async (req, res) => {
  try {
    const {img_video} = req.body
    const result = await ValidRegisterProduct(req.body);
    if(result.error){
      return res.status(400).json({error: JSON.parse(result.error.message)});
    }
    const NewProduct = await productos.create({
      ...result.data,
      img_video, 
    })
    res.status(200).json({message: 'producto creado con exito',NewProduct})
  } catch (error) {
    res.status(500).json({error: error.message})
    console.log(error);
  }
}