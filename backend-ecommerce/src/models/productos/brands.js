import { DataTypes} from "sequelize";
import { sequelize } from "../../database.js";

export const Brand = sequelize.define("brands",{
    id_brands: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true,
        allowNull: false,
    },
    brand:{
        type: DataTypes.STRING(30),
        allowNull: false,
    }
})
