import { sequelize } from "../../database.js";
import { DataTypes } from "sequelize";
export const Roles = sequelize.define(
  "rol",
  {
    role_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    rol: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    tableName: "rol",
    timestamps: false,
  }
);
