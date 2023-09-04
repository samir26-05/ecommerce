import { productos } from "../../models/productos/productos.js"
import z from "zod";
const UpdateProduct = z.object({
    name: z.string().refine( async (values) => {
        const Product = await productos.findOne({where: {name: values}})
        if(Product){
            return false;
        }
        return true;
    },{message: "este nombre ya lo tiene otro producto"}).optional(),
    sizes_id: z.number().optional(),
    descripcion: z.string().optional(),
    id_brands: z.number().optional(),
    price: z.number().optional(),
    category_id: z.number().optional(),
    id_section: z.number().optional(),
    stock: z.number().optional()
})
export function ValidRegisterUpdate(object) {
    const result = UpdateProduct.safeParseAsync(object);
    return result;
  }
  