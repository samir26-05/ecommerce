import morgan from "morgan";
import cors from "cors";
import express,{static as FileServer} from "express";
import RouteUser from "./routes/User.routes.js";
import RouterProduct from "./routes/Product.routes.js";
import RouterSupllier from "./routes/Supplier.routes.js";
import RouterOrder from "./routes/Orders.routes.js";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(morgan('dev'));
app.use(cors());
app.get('/',(req,res ) => {
    res.json({message : 'route not found'})
})

// Routas 
app.use('/supllier',RouterSupllier)
app.use('/product',RouterProduct)
app.use('/user',RouteUser)
app.use('/api/file',FileServer('//jesus-afanador/uploads/'));
app.use('/order',RouterOrder)
export default app