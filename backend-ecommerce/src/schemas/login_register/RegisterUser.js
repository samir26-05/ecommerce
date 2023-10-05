import { User } from "../../models/Usuarios/User.js";
import z from "zod";

const RegisterValidator = z.object({
  user: z
    .string()
    .trim()
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
        message: "Nombre de usuario ya registrado, Intenta cambiarlo",
      }
    )
    .refine(
      async (values) => {
        if (values.length < 1 || values === "") {
          return false;
        }
        return true;
      },
      { message: "no puede quedar en blanco el campo" }
    ),
  nombre: z
    .string()
    .trim()
    .nullable()
    .refine(
      async (values) => {
        if (values.length < 1 || values === "") {
          return false;
        }
        return true;
      },
      { message: "no puede quedar en blanco el campo" }
    ),
  apellido: z
    .string()
    .trim()
    .nullable()
    .refine(
      async (values) => {
        if (values.length < 1 || values === "") {
          return false;
        }
        return true;
      },
      { message: "no puede quedar en blanco el campo" }
    ),
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
