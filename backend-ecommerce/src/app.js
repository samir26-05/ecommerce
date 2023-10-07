import morgan from "morgan";
import cors from "cors";
import express from 'express';
const { static: FileServer } = express;
import RouteUser from "./routes/User.routes.js";
import RouterProduct from "./routes/Product.routes.js";
import RouterSupllier from "./routes/Supplier.routes.js";
import RouterOrder from "./routes/order.routes.js";
import * as Archivos from "./libs/constas.js";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.get("/", (req, res) => {
  res.json({ message: "route not found" });
});

// Routas
app.use("/supllier", RouterSupllier);
app.use("/product", RouterProduct);
app.use("/user", RouteUser);
app.use("/api/file", FileServer(Archivos.urlArchivos));
app.use("/api/file/avatar",FileServer(Archivos.avatarfile))
app.use("/order", RouterOrder);
export default app;
