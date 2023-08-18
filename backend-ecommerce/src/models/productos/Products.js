import { DataTypes } from "sequelize";
import { sequelize } from "../../database.js";
import { variantshirts } from "./variantshirts.js";
import z from "zod";
export const Productos = sequelize.define("Productos", {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  section: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  img_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const SchemeProduct = z.object({
  name: z.string().refine(async (value) =>{
    const ExisteName = await Productos.findOne({where :{name: value}})
    console.log(ExisteName)
    if(ExisteName){
      return false;
    }
    return true;
  },{message: 'Este nombre ya se encuentra en el sistema'}),
  description: z.string(),
  price: z.string(),
  section: z.string().toUpperCase(),
  categoria: z.string(),
  img_url: z.string(),
  variantes: z.array(z.object({
    talla: z.string(),
    color: z.string(),
    stock: z.number()
  }))
});

export async function ValidProduct(object) {
  const result = await SchemeProduct.safeParseAsync(object);
  return result;
}

variantshirts.belongsTo(Productos, { foreignKey: 'product_id' }); // Definir relación
Productos.hasMany(variantshirts, { foreignKey: 'product_id' }); // Definir relación