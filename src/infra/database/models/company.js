const { DataTypes } = require('sequelize');
const { sequelize } = require('../index');

const Company = sequelize.define('Company', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cuisine: {
        type: DataTypes.STRING,
        allowNull: false,
    },

     
    timestamps: true, 

});

module.exports = Company; 