import { Provedor } from "../../models/Provedores/Provedor.js";
import z from "zod";

const SchemaUpdateProvedor = z.object({
    name: z.string().refine(async (value) => {
        const Name = await Provedor.findOne({where: {name: value}})
        if(Name){
            return false;
        }
        return true
    },{message: 'este Nombre de proveedor ya esta en el sistema'}).optional(),
    PhoneNumber: z.string().refine((value) => {
        // Eliminar espacios en blanco y otros caracteres no numéricos
        if (!/^\d{10}$/.test(value)){
            return false;
        }
        return true;
      }, {
        message: "El número de teléfono debe tener 10 dígitos"
      }),
    email: z.string().email().optional()
})

export function ValidUpdateProvedor(object) {
    const result = SchemaUpdateProvedor.safeParseAsync(object);
    return result;
  }
  