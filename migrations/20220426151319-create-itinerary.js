'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('itineraries', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
      },
      name: {
        type: DataTypes.STRING,
        allowNull:false
      },
      start_location: {
        type: DataTypes.STRING,
        allowNull:false
      },
      end_location: {
        type: DataTypes.STRING,
        allowNull:false
      },
      price: {
        type: DataTypes.INTEGER
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('itineraries');
  }
};