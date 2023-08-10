import app from "./app.js";
import { sequelize } from "./database.js";
import "./models/users.js";
  
async function main() {
  try {
    // await sequelize.sync({alter: true});
    app.listen(3000);
    console.log(`escuchando en el puerto ${3000}`);
  } catch (error) {
    console.log("ocurrio un error al prender la api");
  }
}
main();
