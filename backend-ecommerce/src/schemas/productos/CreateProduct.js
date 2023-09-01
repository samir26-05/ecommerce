import { productos } from "../../models/productos/productos.js";
import z from "zod";

const CreateProduct = z.object({
    name: z.string().nullable(),
    sizes_id: z.number().nullable(),
    descripcion: z.string().nullable(),
    id_brands: z.number().nullable(),
    price: z.number().nullable(),
    category_id: z.number().nullable(),
    id_section: z.number().nullable(),
    stock: z.number().nullable(),
})

export function ValidRegisterProduct(object) {
    const result = CreateProduct.safeParseAsync(object);
    return result;
  }
  