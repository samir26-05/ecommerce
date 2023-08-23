import { DataTypes } from "sequelize";
import { sequelize } from "../../database.js";
import { talla } from "./talla.js";
import { marca } from "./brands.js";
export const productos = sequelize.define("products", {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
});

// -----relaciones------

// realacion de talla y productos 
productos.belongsTo(talla,{
    foreignKey: 'sizes_id'
})
talla.hasMany(productos, {
    foreignKey: 'sizes_id'
})

// relacion de marca y producto
productos.belongsTo(marca,{
    foreignKey: 'id_brands'
})
marca.hasMany(productos, {
    foreignKey: 'id_brands'
})