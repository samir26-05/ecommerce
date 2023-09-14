import { DataTypes} from "sequelize";
import { sequelize } from "../../database.js";
export const marca = sequelize.define("brand",{
    id_brands: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    brand:{
        type: DataTypes.STRING(30),
        allowNull: false,
    }
},{
    tableName: "brand",
    timestamps: false
})