import { DataTypes } from "sequelize";
import { sequelize } from "../../database.js";
import { talla } from "./talla.js";
import { marca } from "./brands.js";
import { category } from "./categoria.js";
import { section } from "./section.js";
export const productos = sequelize.define("product", {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
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
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_section: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  img_video: {
    type: DataTypes.STRING(500),
    allowNull: false,
  }
},{
  tableName: 'product'
});

// -----relaciones------

// relacion de talla y productos
productos.belongsTo(talla, {
  foreignKey: "sizes_id",
});
talla.hasMany(productos, {
  foreignKey: "sizes_id",
});
// relacion de marca y productos
productos.belongsTo(marca, {
  foreignKey: "id_brands",
})
marca.hasMany(productos, {
  foreignKey: "id_brands",

})
// relacion de categoria y productos
productos.belongsTo(category,{
  foreignKey: "category_id",
})
category.hasMany(productos, {
  foreignKey: "category_id",
})
// Relacion de seccion y productos
productos.belongsTo(section,{
  foreignKey: "id_section",
})
section.hasMany(productos,{
  foreignKey: "id_section",
})