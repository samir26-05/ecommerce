import { sequelize } from "../../database.js";
import { DataTypes } from "sequelize";
export const state = sequelize.define("state",{
    id_state: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    tableName: "state",
    timestamps: false
})