import { sequelize } from "../../database.js";
import { DataTypes } from "sequelize";
import { User } from "./User.js";
export const Personal_information = sequelize.define("Personal_information", {
  personal_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(30),
  },
  apellido: {
    type: DataTypes.STRING(30),
  },
  Phone_number: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING(120),
  },
  city: {
    type: DataTypes.STRING(60),
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
// relacion de usuarios y datos personales
Personal_information.belongsTo(User, {
  foreignKey: "user_id",
});
User.hasOne(Personal_information, {
  foreignKey: "user_id",
});
