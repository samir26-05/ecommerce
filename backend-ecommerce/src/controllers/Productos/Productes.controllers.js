import { Productos, ValidProduct } from "../../models/productos/Products.js";
import { variantshirts } from "../../models/productos/variantshirts.js";
import { ipFileServer } from "../../libs/constants.js";
export const getProductosCamisas = async (req, res) => {
  try {
    const result = await Productos.findAll({
      include: [{ model: variantshirts }],
    });
    if (!result) {
      return res
        .status(404)
        .json({ message: "no se encontro ningun producto" });
    }
    res.status(200).json({ message: "lista de todos los productos", result });
  } catch (error) {
    res.status(404).json({ message: "ocurrio un error", error: error.message });
  }
};
export const getProductshirtsName = async (req, res) => {
  try {
    const { name } = req.params;
    const Camisa = await Productos.findOne({
      where: { name },
      include: variantshirts,
    });
    if (!Camisa) {
      return res
        .status(404)
        .json({ message: "este producto no se encuentra registrado" });
    }
    res.status(200).json({ Camisa });
  } catch (error) {
    res.status(404).json({ message: "ocurrio un error", error: error.message });
    console.log(error);
  }
};
export const CrearProductshirts = async (req, res) => {
  try {
    const { file } = req;
    if(!file){
      res.status(404).json({ message: 'no se ingreso ningun archivo'})
    }
    const { data } = req.body;
    const validationResult = await ValidProduct(JSON.parse(data));
    if (validationResult.error) {
      return res
        .status(400)
        .json({ error: JSON.parse(validationResult.error.message) });
    }
    const newProductData = validationResult.data; // Obtener los datos validados
    const newProduct = await Productos.create({
      name: newProductData.name,
      description: newProductData.description,
      price: "$" + newProductData.price,
      section: newProductData.section,
      categoria: newProductData.categoria,
      img_url: `${ipFileServer}${file.filename}`,
    });
    const nuevasVariantes = await Promise.all(
      newProductData.variantes.map(async (varianteData) => {
        const { talla, color, stock } = varianteData;
        const nuevaVariante = await variantshirts.create({
          talla,
          color,
          stock,
          product_id: newProduct.product_id, // Asignar el ID del nuevo producto
        });
        return nuevaVariante;
      })
    );

    res.status(200).json({
      message: "producto creado con exito",
      producto: newProduct,
      variantes: nuevasVariantes,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "ocurrió un error" });
  }
};
