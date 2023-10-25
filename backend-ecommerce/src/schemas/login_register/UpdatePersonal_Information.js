import z from "zod";

const ShemaUpdatePersonal = z.object({
  nombre: z
    .string()
    .trim()
    .refine(
      async (values) => {
        if (values.length < 1 || values === "") {
          return false;
        }
        return true;
      },
      { message: "no puede quedar en blanco el campo" }
    )
    .optional(),
  apellido: z
    .string()
    .trim()
    .refine(
      async (values) => {
        if (values.length < 1 || values === "") {
          return false;
        }
        return true;
      },
      { message: "no puede quedar en blanco el campo" }
    )
    .optional(),
  Phone_number: z.string().trim().optional(),
  address: z
    .string()
    .refine(
      async (values) => {
        if (values.length < 1 || values === "") {
          return false;
        }
        return true;
      },
      { message: "no puede quedar en blanco el campo" }
    )
    .optional(),
  city: z
    .string()
    .trim()
    .refine(
      async (values) => {
        if (values.length < 1 || values === "") {
          return false;
        }
        return true;
      },
      { message: "no puede quedar en blanco el campo" }
    )
    .optional(),
  country: z
    .string()
    .trim()
    .refine(
      async (values) => {
        if (values.length < 1 || values === "") {
          return false;
        }
        return true;
      },
      { message: "no puede quedar en blanco el campo" }
    )
    .optional(),
  postalcode: z
    .string()
    .trim()
    .optional(),
  state: z.string().optional(),
});
export function ValidUpdatePersonal(object) {
  const result = ShemaUpdatePersonal.safeParseAsync(object);
  return result;
}
