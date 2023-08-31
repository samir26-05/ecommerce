import { DataTypes } from "sequelize";
import {sequelize} from "../../database.js";
export const section = sequelize.define("section",{
    id_section: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    section: {
        type: DataTypes.STRING(30),
        allowNull: false,
    }
},{
    tableName: 'section',
    timestamps: false
})