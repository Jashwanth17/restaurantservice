const { sequelize } = require('../index');
const { DataTypes } = require('sequelize');

const Restaurant = sequelize.define('Restaurant', {
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
});

module.exports = Restaurant; 
