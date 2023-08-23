import { DataTypes } from "sequelize";
import { sequelize } from "../../database.js";

import { users } from "../Login/users.js";

export const ShippingAddress = sequelize.define('address', {
  address_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  street_address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  postal_code: {
    type: DataTypes.STRING,
    allowNull: false
  }
});


  // -----relaciones------

// realacion de Orden y usuario
ShippingAddress.belongsTo(users, {
  foreignKey: "user_id",
  allownull: false,
});
users.hasMany(ShippingAddress, {
  foreignKey: "user_id",
  allownull: false,
});