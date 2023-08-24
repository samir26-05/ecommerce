import { DataTypes } from "sequelize";
import { sequelize } from "../../database.js";

import { Size } from "./size.js";
import { Brand } from "./brand.js";
import { Category } from "./category_product.js";
import { Section } from "./section.js";

export const Products = sequelize.define("product", {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  section_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sizes_id: {
    type: DataTypes.INTEGER,
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
// Relacion de producto y seccion
Products.belongsTo(Section, {
  foreignKey: "section_id",
});
Section.hasMany(Products, {
  foreignKey: "section_id",
});
