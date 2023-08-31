import morgan from "morgan";
import cors from "cors";
import express,{static as FileServer} from "express";
import RouteUser from "./routes/User.routes.js";
import RouterProduct from "./routes/Product.routes.js";
import { urlArchivos } from "./libs/constas.js";
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
app.use('/api/file',FileServer(urlArchivos))
export default app