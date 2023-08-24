import { DataTypes } from "sequelize";
import { sequelize} from "../../database.js";

export const Size = sequelize.define("size",{
    sizes_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true,
        allownull: false,
    },
    size: {
        type: DataTypes.STRING,
        allownull: false
    }
})
