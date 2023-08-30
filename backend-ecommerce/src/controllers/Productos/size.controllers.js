import { talla } from "../../models/productos/talla.js";

export const Getsize = async (req, res) => {
  try {
    const Result = await talla.findAll();
    if (!Result) {
      return res.status(404).json({ message: "no se encontro ninguna talla" });
    }
    res.status(200).json(Result);
  } catch (error) {
    res.status(505).json({ message: error.message });
  }
};