const Sequelize = require('sequelize');

module.exports = new Sequelize('cultivar_orm', 'wsl_root', 'root',{
    dialect: 'mysql',
    host:'192.168.1.43',
    port: '3308'
})