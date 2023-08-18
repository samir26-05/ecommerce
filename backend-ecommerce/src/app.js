import express from "express";
import morgan from "morgan";
import  RouteUsers  from "./routes/users.routes.js"
import LoginUsers from "./routes/auth.routes.js";
import ProductRoute from "./routes/products.routes.js";
import cors from "cors";


const app = express();
app.use(express.json())
app.use(morgan('dev'));
app.use(cors());
app.get('/',(req,res ) => {
    res.json({message : 'route not found'})
})

// Routas 
app.use('/users',RouteUsers)
app.use('/login',LoginUsers)
app.use('/products',ProductRoute)
export default app