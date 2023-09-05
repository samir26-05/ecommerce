import app from "./app.js";
import { sequelize } from "./database.js";
import "./models/Provedores/Provedor.js";
import { PORT } from "./config.js";
async function main() {
  try {
     await sequelize.sync({alert: true});
    app.listen(PORT);
    console.log(`escuchando en el puerto ${PORT}`);
  } catch (error) {
    console.log("ocurrio un error al prender la api");
    console.log(error);
  }
}
main();