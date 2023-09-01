import { DataTypes} from "sequelize";
import { sequelize } from "../../database.js";
export const Provedor = sequelize.define("supplier",{
    id_supplier: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name:{
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    PhoneNumber:{
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING(100),
        allowNull: false,
    }
},{
    tableName: "supplier"
})