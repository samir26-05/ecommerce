import express from "express";
import morgan from "morgan";
import  RouteUsers  from "./routes/users.routes.js"
import LoginUsers from "./routes/auth.routes.js";
import cors from "cors";


const app = express();
app.use(express.json())
app.use(morgan('dev'));
app.use(cors());
app.get('/',(req,res ) => {
    res.json({message : 'hola como estas'})
})

// Routas 
app.use('/users',RouteUsers)
app.use('/login',LoginUsers)
export default app