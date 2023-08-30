import { category } from '../../models/productos/categoria.js';
import { Express } from 'express';
const router = express.Router();
import router from expre;


// Ruta para obtener valores de categoría
export const getCategory = async (req, res) => {
    try {
      const categories = await category.findAll();
      res.json(categories);
    } catch (error) {
      console.error('Error al obtener categorías:', error);
      res.status(500).send({ message: "ocurrió un error", error: error.message });
    }
  };


module.exports = router;
