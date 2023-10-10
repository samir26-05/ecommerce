import app from "./app.js";
import { sequelize } from "./database.js";
import "./models/productos/shoe_size.js";
import { PORT } from "./config.js";
async function main() {
  try {
    await sequelize.sync({ alert: true });
    app.listen(PORT);
    console.log(`Servidor iniciado en el puerto ${PORT}`);
  } catch (error) {
    console.log("ocurrio un error al prender la api");
    console.log(error);
  }
}
main();
