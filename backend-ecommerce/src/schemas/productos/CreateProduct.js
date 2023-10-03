import { productos } from "../../models/productos/productos.js";
import z from "zod";

const CreateProduct = z.object({
    name: z.string().refine( async (values) => {
        const Product = await productos.findOne({where: {name: values}})
        if(Product){
            return false;
        }
        return true;
    },{message: "este nombre ya lo tiene otro producto"}).nullable(),
    sizes_id: z.number().optional(),
    shoe_size_id: z.number().optional(),
    descripcion: z.string().nullable(),
    id_brands: z.number().nullable(),
    price: z.number().nullable(),
    category_id: z.number().nullable(),
    id_section: z.number().nullable(),
    stock: z.number().nullable()
})

export function ValidRegisterProduct(object) {
    const result = CreateProduct.safeParseAsync(object);
    return result;
  }

