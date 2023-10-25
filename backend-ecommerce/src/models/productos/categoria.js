import { DataTypes} from "sequelize";
import { sequelize } from "../../database.js";
export const category = sequelize.define("category",{
  category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    category:{
        type: DataTypes.STRING(30),
        allowNull: false,
    }
},{
  tableName: "category",
  timestamps: false
})