import { DataTypes } from "sequelize";
import { sequelize } from "../../database.js";

export const Category = sequelize.define("category_product", {
  category_id: {
    type: DataTypes.INTEGER,
    PrimaryKey: true,
    allowNull: false,
    autoincrement: true,
  },
  category: {
    type: DataTypes.STRING(20),
    allowNull: false,
  }
});
