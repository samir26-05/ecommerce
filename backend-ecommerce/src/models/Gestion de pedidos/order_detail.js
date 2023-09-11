import { sequelize } from "../../database.js";
import { DataTypes } from "sequelize";
import { Orden_compra } from "./orders.js";
import { productos } from "../productos/productos.js";
export const detalle_compra = sequelize.define("order_detail",{
    detail_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    id_order: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    product_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total_value: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    }
})
// realcion de detalle de compra con pedidos
detalle_compra.belongsTo(Orden_compra, {
    foreignKey: "id_order",
  });
  Orden_compra.hasMany(detalle_compra, {
    foreignKey: "id_order",
  });

// relacion de detalle de compra con productos
detalle_compra.belongsTo(productos, {
    foreignKey: "product_id",
  });
  productos.hasMany(detalle_compra, {
    foreignKey: "product_id",
  });
