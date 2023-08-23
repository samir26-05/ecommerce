import app from "./app.js";
import { sequelize } from "./database.js";
import "./models/productos/brands.js";
import "./models/productos/cart.js";
import "./models/productos/categories.js";
import "./models/productos/order.js";
import "./models/productos/orderDetails.js";
import "./models/productos/paymentMethods.js";
import "./models/productos/products.js";
import "./models/productos/shippingAddress.js";
import "./models/productos/sizes.js";
import "./models/productos/transactions.js";

import { PORT } from "./config.js";
async function main() {
  try {
    await sequelize.sync({force: true});
    app.listen(PORT);
    console.log(`escuchando en el puerto ${PORT}`);
  } catch (error) {
    console.log("ocurrio un error al prender la api");
    console.log(error)
  }
}
main();
