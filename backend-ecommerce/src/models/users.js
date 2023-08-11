import { DataTypes} from "sequelize";
import { sequelize } from "../database.js";
import z from "zod";
export const users = sequelize.define("users", {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password_hash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

const userSchema = z.object({
  email: z
    .string()
    .email()
    .toLowerCase()
    .refine(async (value) => {
      const existeEmail = await users.findOne({ where: { email: value } });
      if (existeEmail) {
        return false;
      }
      return true;
    }, { message: "El correo ya se encuentra registrado" }),
  password_hash: z.string(),
  first_name: z.string().toLowerCase(),
  last_name: z.string().toLowerCase(),
  address: z.string().toLowerCase(),
  phone_number: z
    .string()
    .refine((value) => /^\d{10}$/.test(value), {
      message: "El número de teléfono debe tener exactamente 10 dígitos",
    })
    .refine(async (value) => {
      const telefono = await users.findOne({ where: { phone_number: value } });
      if (telefono) {
        return false;
      }
      return true;
    }, { message: "El teléfono ya existe en el sistema" }),
  is_admin: z.boolean().optional(),
});

  export function Validusers(object) {
      const result = userSchema.safeParseAsync(object);
      return result;
  }