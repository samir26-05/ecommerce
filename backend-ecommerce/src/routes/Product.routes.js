import { Router } from "express";
import * as Jwt from "../middlewares/AuthJwt.js";
import * as Brand from "../controllers/Productos/brand.controllers.js";
import * as Category from "../controllers/Productos/category.controllers.js";
import * as Section from "../controllers/Productos/Section.controllers.js";
import * as size from "../controllers/Productos/size.controllers.js";
import * as Product from "../controllers/Productos/Products.controllers.js";
import * as shoe_size from "../controllers/Productos/shoe_size.controllers.js";
import { uploads } from "../middlewares/multer.js";
const router = Router();

// Routas de productos
router.post("/create",[Jwt.validatetoken,Jwt.isAdmin],uploads,Product.CreateProduct,);
router.get("/", Product.GetProducts);
router.put('/update/:id',[Jwt.validatetoken,Jwt.isAdmin],uploads,Product.UpdateProduct)
router.delete('/delete/:N1',[Jwt.validatetoken,Jwt.isAdmin],Product.DeleteProduct)
router.get('/:id/section',Jwt.validatetoken,Product.GetSectionProduct)
router.get('/:name/category',Jwt.validatetoken,Product.GetCategoryProduct)
router.get('/id/:id',Jwt.validatetoken,Product.GetProductId)
router.get('/section/:id/category/:name',Jwt.validatetoken,Product.GetProductSectionCategory)
// Routas de marcas
router.get("/brand", Brand.Getbrands);

// Routas de Categorias
router.get("/category", Category.GetCategory);

// Routas de Secciones
router.get("/Section", Section.GetSection);

// Routas de Tallas
router.get("/size", size.Getsize);

// Routas de tallas de zapatos
router.get("/shoe_size",shoe_size.Getsize)
export default router;
