import Sequelize from 'sequelize';

export const sequelize = new Sequelize('ecommerce','root','',{
    host : '192.168.12.43',
    dialect: 'mysql'
});