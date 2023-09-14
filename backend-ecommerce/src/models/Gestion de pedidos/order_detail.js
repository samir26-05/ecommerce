import { sequelize } from "../../database.js";
import { DataTypes } from "sequelize";
import { productos } from "../productos/productos.js";
import { User } from "../Usuarios/User.js";
export const detalle_compra = sequelize.define("order_detail",{
    detail_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    user_id: {
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
        type: DataTypes.FLOAT,
        allowNull: false,
    }
})
// realcion de detalle de compra con pedidos
detalle_compra.belongsTo(User, {
    foreignKey: "user_id",
  });
  User.hasMany(detalle_compra, {
    foreignKey: "user_id",
  });

// relacion de detalle de compra con productos
detalle_compra.belongsTo(productos, {
    foreignKey: "product_id",
  });
  productos.hasMany(detalle_compra, {
    foreignKey: "product_id",
  });
