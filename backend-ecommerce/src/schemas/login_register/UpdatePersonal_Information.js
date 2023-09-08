import z from "zod";
import { Personal_information } from "../../models/Usuarios/Personal_information.js";

const ShemaUpdatePersonal = z.object({
    nombre: z.string().optional(),
    apellido: z.string().optional(),
    Phone_number: z.string().refine(async (value) => {
    const PhoneFond = await Personal_information.findOne({where: {Phone_number: value}})
    if(PhoneFond){
        return false
    }
    return true
    },{message: 'Este numero ya se encuentra registrado con otra cuenta'}).refine(async (value) => {
        if(!/^\d{10}$/.test(value)){
            return false
        }
    return true
    },{message: 'Numero Invalido'}).optional(),
    address: z.string().optional(),
    city: z.string().optional(),
    country: z.string().optional(),
    postalcode: z.string().optional(),
    state: z.string().optional(),
})

export function ValidUpdatePersonal(object) {
    const result = ShemaUpdatePersonal.safeParseAsync(object);
    return result;
  }
  