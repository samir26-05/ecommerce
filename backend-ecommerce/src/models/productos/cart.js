import { DataTypes } from "sequelize";
import { sequelize } from "../../database.js";
import { users } from "../Login/users.js";
import { Products } from "./products.js";

export const Car = sequelize.define('shopping_car', {
    cart_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  

  // -----relaciones------

// realacion de carrito y usuario
Car.belongsTo(users, {
  foreignKey: "user_id",
  allownull: false,
});
users.hasMany(Car, {
  foreignKey: "user_id",
  allownull: false,
});
// relacion de carrito  y producto
Car.belongsTo(Products, {
  foreignKey: "product_id",
});
Products.hasMany(Car, {
  foreignKey: "product_id",
});