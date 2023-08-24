import { sequelize } from "../../database.js";

export const createProduct = async (req, res) => {
    try {
      const { name, size_id, description, id_brands, price, category_id, image } = req.body;
      const [rows] = await pool.query(
        "INSERT INTO products (name, size_id, description, id_brands, price, category_id, image) VALUES(?,?,?,?,?,?,?)",
        [name, size_id, description, id_brands, price, category_id, image]
      );
      res.send({
        product_id: rows.insertId, name, size_id, description, id_brands, price, category_id, image
      });
    } catch (error) {
      return res.status(401).json({
        message: "Database was not updated, error in the data types entered",
      });
    }
  };
  
  export const getProduct = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM products");
      res.json(rows);
    } catch (error) {
      return res.status(404).json({
        message: "Not found",
      });
    }
  };
  
  export const updateProduct = async (req, res) => {
    try {
      const { id_product } = req.params;
      const { name_product, quantity, price } = req.body;
      const [rows] = await pool.query("UPDATE inventory SET id_product = IFNULL(?, id_product), name_product = IFNULL(?, name_product), quantity = IFNULL(?, quantity), price = IFNULL(?,price) ",[id_product, name_product, quantity, price]);
      res.json(rows[0]);
    } catch (error) {
      return res.send(404).json({
        message: `The register can't been update`,
      });
    }
  };
  
  export const deleteProduct = async (req, res) => {
    try {
      const [rows] = await pool.query('DELETE FROM inventory WHERE id_product = ?', [req.params.id_product]);
      if (rows.affectedRows <= 0) return res.status(404).json({
        message: "inventory not found."
    });
    res.json(result);
    } catch (error) {
      return res.status(404).json({
        message: "Register in database was not delete",
      });
    }
  };