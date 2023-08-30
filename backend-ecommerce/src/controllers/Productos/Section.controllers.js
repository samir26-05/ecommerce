import { section } from "../../models/productos/section.js";
export const GetSection = async (req, res) => {
  try {
    const Result = await section.findAll();
    if (!Result) {
    return res.status(404).json({message: 'no se encontro ninguna seccion'})
    }
    res.status(200).json(Result)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
};