import { DataTypes } from "sequelize";
import { sequelize} from "../../database.js";

export const Section = sequelize.define("section",{
    section_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true,
        allownull: false,
    },
    type_section: {
        type: DataTypes.STRING,
        allownull: false
    }
})
