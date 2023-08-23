import { DataTypes } from "sequelize";
import { sequelize } from "../../database.js";
import { Order } from "./order.js";

export const Transaction = sequelize.define('transaction', {
  transaction_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  transaction_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  payment_method: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

  // -----relaciones------

// realacion de Orden y usuario
Transaction.belongsTo(Order, {
  foreignKey: "order_id",
  allownull: false,
});
Order.hasMany(Transaction, {
  foreignKey: "order_id",
  allownull: false,
});