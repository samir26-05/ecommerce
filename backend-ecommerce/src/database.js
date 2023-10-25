import Sequelize from 'sequelize';
import { DATABASE_NAME,HOST,DATABASE_USER,PASSWORD,PORT_DB } from "./config.js";
export const sequelize = new Sequelize(DATABASE_NAME,DATABASE_USER,PASSWORD,{
    host : HOST,
    dialect: 'mysql',
    port: PORT_DB,
    logging: false,
});