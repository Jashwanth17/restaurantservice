const { Sequelize } = require('sequelize');

require('dotenv').config();  

const sequelize = new Sequelize(
    process.env.DB_NAME,  
    process.env.DB_USER, 
    String(process.env.DB_PASSWORD),  
    {
        host: process.env.DB_HOST || 'localhost',  
        dialect: 'postgres',  
        port: process.env.DB_PORT || 5432,  
    }
);

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
    }
};

testConnection();

module.exports = { sequelize, testConnection };
