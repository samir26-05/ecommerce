import morgan from "morgan";
import cors from "cors";
import express from "express";
import RouteUser from "./routes/User.routes.js";
import RouterProduct from "./routes/Product.routes.js";
const app = express();
app.use(express.json())
app.use(morgan('dev'));
app.use(cors());
app.get('/',(req,res ) => {
    res.json({message : 'route not found'})
})

// Routas 
app.use('/product',RouterProduct)
app.use('/user',RouteUser)
export default app