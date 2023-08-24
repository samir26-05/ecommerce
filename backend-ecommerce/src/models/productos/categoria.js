import { DataTypes } from "sequelize";
import { sequelize } from "../../database.js";
export const categoria = sequelize.define("categorys", {
  Category_id: {
    type: DataTypes.INTEGER,
    PrimaryKey: true,
    allowNull: false,
    autoincrement: true,
  },
  Category: {
    type: DataTypes.STRING(20),
    allowNull: false,
  }
});
