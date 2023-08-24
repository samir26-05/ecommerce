import app from "./app.js";
import { sequelize } from "./database.js";
import "./models/productos/brand.js";
import "./models/productos/cart.js";
import "./models/productos/category_product.js";
import "./models/productos/order.js";
import "./models/productos/orderDetail.js";
import "./models/productos/paymentMethod.js";
import "./models/productos/product.js";
import "./models/productos/shippingAddress.js";
import "./models/productos/size.js";
import "./models/productos/transaction.js";

import { PORT } from "./config.js";
async function main() {
  try {
    await sequelize.sync({alter: true});
    app.listen(PORT);
    console.log(`escuchando en el puerto ${PORT}`);
  } catch (error) {
    console.log("ocurrio un error al prender la api");
    console.log(error)
  }
}
main();
