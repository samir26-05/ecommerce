import { User } from "../../models/Usuarios/User.js";
import z from "zod";

const RegisterValidator = z.object({
  user: z
    .string()
    .nullable()
    .refine(
      async (value) => {
        const UserExist = await User.findOne({ where: { user: value } });
        if (UserExist) {
          return false;
        }
        return true;
      },
      { message: "!!Este Usuario Ya Se Encuentra Registrado¡¡" }
    ),
  nombre: z.string().nullable(),
  apellido: z.string().nullable(),
  email: z
    .string()
    .email()
    .nullable()
    .refine(
      async (value) => {
        const ExisteEmail = await User.findOne({ where: { email: value } });
        if (ExisteEmail) {
          return false;
        }
        return true;
      },
      { message: "!!Este Correo Ya Se Encuentra Registrado¡¡" }
    ),
  role_id: z.number().optional(),
});
export function ValidRegister(object) {
  const result = RegisterValidator.safeParseAsync(object);
  return result;
}
