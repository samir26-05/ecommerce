import { DataTypes } from "sequelize";
import { sequelize } from "../../database.js";
import { users } from "../Login/users.js";

export const Order = sequelize.define('order', {
  order_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  order_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  }
});


  // -----relaciones------

// realacion de Orden y usuario
Order.belongsTo(users, {
  foreignKey: "user_id",
  allownull: false,
});
users.hasMany(Order, {
  foreignKey: "user_id",
  allownull: false,
});