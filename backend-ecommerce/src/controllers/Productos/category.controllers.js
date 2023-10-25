import { category } from "../../models/productos/categoria.js";
export const GetCategory = async (req, res) => {
  try {
    const Result = await category.findAll();
    if (!Result) {
      res.status(404).json({ message: "no se encontro ninguna categoria" });
    }
    res.status(200).json(Result);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};