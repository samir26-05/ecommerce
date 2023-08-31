import { sequelize } from "../../database.js";
import { DataTypes } from "sequelize";
import { Roles } from "./Roles.js";

export const User = sequelize.define(
  "user",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2,
    },
  },
  {
    tableName: "user",
    timestamps: false,
  }
);

// relacion de usuarios y roles
User.belongsTo(Roles, {
  foreignKey: "role_id",
});
Roles.hasMany(User, {
  foreignKey: "role_id",
});
