import { sequelize } from "../../database.js";
import { productos } from "../productos/productos.js";
import { Orden_compra } from "./orders.js";
import {DataTypes} from "sequelize"
export const order_detail = sequelize.define("order_detail", {
    id_detail:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    id_order:{
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
    product_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    amount:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    valor:{
        type: DataTypes.DOUBLE,
        allowNull: false,
    }
},{
    tableName: "order_detail",
})
Orden_compra.hasMany(order_detail,{
    foreignKey: 'id_order',
})
order_detail.belongsTo(Orden_compra,{
    foreignKey: 'id_order',
})
