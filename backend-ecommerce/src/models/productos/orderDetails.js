import { DataTypes } from "sequelize";
import { sequelize } from "../../database.js";

import { Order } from "./order.js";
import { Products } from "./products.js";

export const OrderDetail = sequelize.define('order_detail', {
  order_detail_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  order_id: {
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
  },
  unit_price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

  // -----relaciones------

// realacion de Orden y usuario
OrderDetail.belongsTo(Order, {
  foreignKey: "order_id",
  allownull: false,
});
Order.hasMany(OrderDetail, {
  foreignKey: "order_id",
  allownull: false,
});

OrderDetail.belongsTo(Products, {
  foreignKey: "product_id",
  allownull: false,
});
Products.hasMany(OrderDetail, {
  foreignKey: "product_id",
  allownull: false,
});