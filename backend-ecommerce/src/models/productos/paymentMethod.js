import { DataTypes } from "sequelize";
import { sequelize } from "../../database.js";

import { users } from "../Login/users.js";

export const PaymentMethod = sequelize.define('payment_method', {
  payment_method_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  method_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  card_number: {
    type: DataTypes.STRING,
    allowNull: false
  },
  expiration_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  cvv: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

 // -----relaciones------

// realacion de Orden y usuario
PaymentMethod.belongsTo(users, {
  foreignKey: "user_id",
  allownull: false,
});
users.hasMany(PaymentMethod, {
  foreignKey: "user_id",
  allownull: false,
});