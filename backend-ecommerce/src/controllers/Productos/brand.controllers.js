import { marca } from "../../models/productos/brands.js";

export const Getbrands = async (req, res) => {
  try {
    const Result = await marca.findAll();
    if(!Result){
        return res.status(404).json({message: 'No se encontro ninguna marca' })
    }
    res.status(200).json(Result)
  } catch (error) {
    res.status(500).json({error : error.message})
  }
};