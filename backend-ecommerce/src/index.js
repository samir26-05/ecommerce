import app from "./app.js";
import { sequelize } from "./database.js";
import "./models/productos/categoria.js";
import  "./models/productos/productos.js"
import "./models/productos/talla.js";
import "./models/productos/brands.js";
import "./models/Login/users.js";
import "./models/productos/section.js";
import { PORT } from "./config.js";
async function main() {
  try {
    // await sequelize.sync({alert: true});
    app.listen(PORT);
    console.log(`escuchando en el puerto ${PORT}`);
  } catch (error) {
    console.log("ocurrio un error al prender la api");
    console.log(error);
  }
}
main();