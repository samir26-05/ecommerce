import { DataTypes } from "sequelize";
import { sequelize } from "../../database.js";
import { talla } from "./talla.js";
import { marca } from "./brands.js";
import { categoria } from "./categoria.js";
export const productos = sequelize.define("products", {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "por favor ingrese un nombre",
      },
    },
  },
  sizes_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_brands: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Debe ingresar un precio",
      },
    },
  },
  Category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// -----relaciones------

// realacion de talla y productos
productos.belongsTo(talla, {
  foreignKey: "sizes_id",
  allownull: false,
});
talla.hasMany(productos, {
  foreignKey: "sizes_id",
  allownull: false,
});
// relacion de marca y producto
productos.belongsTo(marca, {
  foreignKey: "id_brands",
});
marca.hasMany(productos, {
  foreignKey: "id_brands",
});
// Relacion de producto y categoria
productos.belongsTo(categoria, {
  foreignKey: "Category_id",
});
categoria.hasMany(productos, {
  foreignKey: "Category_id",
});
