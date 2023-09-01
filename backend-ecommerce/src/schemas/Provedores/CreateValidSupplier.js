import z from "zod";
import { Provedor } from "../../models/Provedores/Provedor.js";

const SchemaCreateProvedor = z.object({
    name: z.string().nullable().refine(async (value) => {
        const Name = await Provedor.findOne({where: {name: value}})
        if(Name){
            return false;
        }
        return true;
    },{message: 'este Nombre de proveedor ya esta en el sistema'}),
    PhoneNumber: z.string().nullable().refine((value) => {
        // Eliminar espacios en blanco y otros caracteres no numéricos
        if (!/^\d{10}$/.test(value)){
            return false;
        }
        return true;
      }, {
        message: "El número de teléfono debe tener 10 dígitos"
      }),
    email: z.string().email().nullable()
})

export function ValidRegisterProvedor(object) {
    const result = SchemaCreateProvedor.safeParseAsync(object);
    return result;
  }
  