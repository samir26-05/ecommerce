import { DataTypes } from "sequelize";
import { sequelize} from "../../database.js";

export const talla = sequelize.define("size",{
    sizes_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allownull: false,
    },
    size: {
        type: DataTypes.STRING,
        allownull: false
    }
},{
    tableName: "size",
    timestamps: false
})