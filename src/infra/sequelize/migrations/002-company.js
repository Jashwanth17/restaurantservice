odule.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('companies', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,               
        allowNull: false                
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cusine: {
        type: Sequelize.STRING,
        allowNull: false
      },
     createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    })
  },
  down: function (queryInterface) {
    return queryInterface.dropTable('companies')
  }
}