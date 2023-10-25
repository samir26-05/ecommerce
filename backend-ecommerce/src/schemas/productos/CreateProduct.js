import { productos } from "../../models/productos/productos.js";
import z from "zod";

const CreateProduct = z.object({
    name: z.string().trim().refine( async (values) => {
        const Product = await productos.findOne({where: {name: values}})
        if(Product){
            return false;
        }
        return true;
    },{message: "Nombre de producto repetido"}).refine(async (values) => {
        if(values.length < 1 || values === ""){
            return false;
        }
        return true;
    },{message: 'no puede quedar en blanco el campo'}),
    sizes_id: z.number().optional(),
    shoe_size_id: z.number().optional(),
    descripcion: z.string().nullable().refine(async (values) => {
        if(values.length < 1 || values === ""){
            return false;
        }
        return true;
    },{message: 'no puede quedar en blanco el campo'}),
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

