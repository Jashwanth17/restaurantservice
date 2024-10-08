const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const Restaurant = sequelize.define('Restaurant', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cuisine: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Restaurant;

