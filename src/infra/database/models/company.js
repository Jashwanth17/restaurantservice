module.exports = (sequelize, DataTypes) => {
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
    }, 
    {
      tableName: 'Restaurants', 
      freezeTableName: true,   
    });
  
    return Restaurant;
  };
  
