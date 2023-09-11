import { sequelize } from "../../database.js";
import { DataTypes } from "sequelize";
import { User } from "../Usuarios/User.js";
import { state } from "./state.js";
export const Orden_compra = sequelize.define("order",{
    id_order: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    discount: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    id_state: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    subtotal:{
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    total_value: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    }
})
// relacion de ordenes a usuarios
Orden_compra.belongsTo(User, {
    foreignKey: "user_id",
  });
  User.hasMany(Orden_compra, {
    foreignKey: "user_id",
  });

// relacion de ordenes a estados del pedido
Orden_compra.belongsTo(state, {
    foreignKey: "id_state",
  });
  state.hasOne(Orden_compra, {
    foreignKey: "id_state",
  });
  
