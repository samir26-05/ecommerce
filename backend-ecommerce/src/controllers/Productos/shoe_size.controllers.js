import { shoe_size } from "../../models/productos/shoe_size.js";

export const Getsize = async (req, res) => {
  try {
    const Result = await shoe_size.findAll();
    if (!Result) {
      return res.status(404).json({ message: "no se encontro ninguna talla" });
    }
    res.status(200).json(Result);
  } catch (error) {
    res.status(505).json({ message: error.message });
  }
};