const { DataTypes, customValidator} = require('sequelize');

const db = require('../config/db.js')

module.exports = db.define('users', {
    nickName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    points: {
        type: DataTypes.INTEGER
    }
})
