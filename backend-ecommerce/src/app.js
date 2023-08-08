import express from "express";
import morgan from "morgan";
import  RouteUsers  from "./routes/users.routes.js";
const app = express();

app.use(morgan('dev'));
app.get('/',(req,res ) => {
    res.json({message : 'hola como estas'})
})

app.use('/users',RouteUsers)
export default app