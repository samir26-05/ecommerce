import { DataTypes } from "sequelize";
import { sequelize } from "../../database.js";

import { Size } from "./sizes.js";
import { Brand } from "./brands.js";
import { Category } from "./categories.js";

export const Products = sequelize.define("products", {
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
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
});

// -----relaciones------

// realacion de talla y productos
Products.belongsTo(Size, {
  foreignKey: "sizes_id",
  allownull: false,
});
Size.hasMany(Products, {
  foreignKey: "sizes_id",
  allownull: false,
});
// relacion de marca y producto
Products.belongsTo(Brand, {
  foreignKey: "id_brands",
});
Brand.hasMany(Products, {
  foreignKey: "id_brands",
});
// Relacion de producto y categoria
Products.belongsTo(Category, {
  foreignKey: "category_id",
});
Category.hasMany(Products, {
  foreignKey: "category_id",
});
