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
      {
        message:
          "Nombre de usuario ya registrado, Intenta cambiarlo",
      }
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
      { message: "Email ya registrado, Intenta cambiarlo" }
    ),
  role_id: z.number().optional(),
});
export function ValidRegister(object) {
  const result = RegisterValidator.safeParseAsync(object);
  return result;
}
