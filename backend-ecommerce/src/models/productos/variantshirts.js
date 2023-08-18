import { DataTypes } from "sequelize";
import { sequelize } from "../../database.js";
import { Productos } from "./Products.js";
import z from "zod";
export const variantshirts = sequelize.define("Varianteshirts",{
    id_shirts : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    talla: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}) 
