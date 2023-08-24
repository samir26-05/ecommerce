import { DataTypes } from "sequelize";
import {sequelize} from "../../database.js";
export const section = sequelize.define("section",{
    id_section: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoincrement: true
    },
    section: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    tableName: 'section'
})
