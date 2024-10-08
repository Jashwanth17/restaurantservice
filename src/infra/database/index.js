require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',   
  protocol: 'postgres',   
  logging: false,         
  dialectOptions: {
    ssl: process.env.DB_SSL === 'true',
  },
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
  }
};

testConnection();

module.exports = { sequelize };




