import { productos } from "../../models/productos/productos.js";
import { sequelize } from "../../database.js";
import { ValidRegisterProduct } from "../../schemas/productos/CreateProduct.js";
import { ValidRegisterUpdate } from "../../schemas/productos/UpdateProduct.js";
import { ipFileServer, urlArchivos } from "../../libs/constas.js";
import { category } from "../../models/productos/categoria.js";
import { section } from "../../models/productos/section.js";
import fs from "fs";
import path from "path";

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
    const { file } = req;
    const ruta = path.join(urlArchivos, file.filename);
    console.log(ruta);
    if (!file) {
      res.status(404).json({ message: "no se ingreso ningun archivo" });
    }
    const { data } = req.body;
    const validationResult = await ValidRegisterProduct(JSON.parse(data));
    if (validationResult.error) {
      fs.unlinkSync(ruta);
      return res
        .status(400)
        .json({ error: JSON.parse(validationResult.error.message) });
    }
    if (validationResult.success) {
      const NewProduct = await productos.create({
        ...validationResult.data,
        img_video: `${ipFileServer}${file.filename}`,
      });
      res
        .status(200)
        .json({ message: "producto creado con exito", NewProduct });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

export const UpdateProduct = async (req, res) => {
  try {
    const { file } = req;
    const { id } = req.params;
    const { data } = req.body;
    const result = await ValidRegisterUpdate(JSON.parse(data));
    const ProductFound = await productos.findOne({ where: { product_id: id } });
    if (!ProductFound) {
      return res
        .status(404)
        .json({ message: "Este producto no se encuentra registrado" });
    }

    if (result.error) {
      if (file) {
        fs.unlinkSync(path.join(urlArchivos, file.filename));
      }

      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }
    if (file) {
      if (ProductFound.img_video) {
        // Eliminar la imagen anterior
        const File = ProductFound.img_video.split("/").slice(3);
        console.log(path.join(urlArchivos, File[2]));
        fs.unlinkSync(path.join(urlArchivos, File[2]));
      }
      const ruta = encodeURI(ipFileServer + file.filename);
      // Actualizar la URL de la nueva imagen
      const NewUpdate = productos.update(
        {
          ...result.data,
          img_video: ruta,
        },
        {
          where: { product_id: id },
        }
      );

      return res
        .status(200)
        .json({
          message: `Producto Actualizado correctamente ${ProductFound.product_id}`,
        });
    } else {
      // No se proporciona una nueva imagen, solo actualizar otros datos
      const NewUpdate = productos.update(
        {
          ...result.data,
          img_video: ProductFound.img_video,
        },
        {
          where: { product_id: id },
        }
      );

      return res
        .status(200)
        .json({
          message: `Producto Actualizado correctamente ${ProductFound.product_id}`,
        });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

export const DeleteProduct = async (req, res) => {
  try {
    const { N1 } = req.params;
    const DeleteProduct = await productos.findOne({
      where: { product_id: N1 },
    });
    if (DeleteProduct) {
      const DeletFile = DeleteProduct.img_video.split("/").slice(3);
      fs.unlinkSync(path.join(urlArchivos, DeletFile[2]));
      DeleteProduct.destroy();
      res.status(200).json({ Message: "Producto eliminado con exito" });
    } else {
      res.status(404).json({ Message: "No se encontro ningun producto" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const GetSectionProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await productos.findAll({ where: { id_section: id } });
    if (!result) {
      return res
        .status(404)
        .json({ message: "No se encontro ningun producto" });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const GetCategoryProduct = async (req, res) => {
  try {
    const { name } = req.params;
    const CategoryFound = await category.findOne({ where: { category: name } });
    if (!CategoryFound) {
      return res.status(404).json({ message: "Categoria no encontrada" });
    }
    const result = await productos.findAll({
      where: { category_id: CategoryFound.category_id },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const GetProductId = async(req, res) => {
  try {
  const {id} = req.params
  const Result = await productos.findOne({where: {product_id: id}})
  if(!Result){
    return res.status(404).json({message: 'Producto no encontrado'})
  }
  res.status(200).json(Result)
  } catch (error) {
  res.status(500).json({error: error.message})
  }
};

export const GetProductSectionCategory = async(req, res) => {
  try {
    const { id, name } = req.params;
    const categoria = await category.findOne({ where: { category: name } });
    const result = await productos.findAll({
      where: {
        id_section: id,
        category_id: categoria.category_id,
    }})
    if(!result){
      return res.status(404).json({message: 'Producto no encontrado'})
    }
    res.status(200).json(result)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};