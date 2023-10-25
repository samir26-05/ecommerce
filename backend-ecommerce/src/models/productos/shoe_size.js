import { sequelize } from "../../database.js";
import { DataTypes } from "sequelize";
export const shoe_size = sequelize.define(
  "shoe_size",
  {
    shoe_size_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    shoe_size_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "shoe_size",
    timestamps: false,
  }
);
