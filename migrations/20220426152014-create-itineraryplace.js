'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('itineraryplace', {
      id: {
        type: DataTypes.UUID,
        allowNull:false,
        primaryKey: true
      },
      id_itinerary: {
        type: DataTypes.UUID,
        allowNull:false,
        references:{
          model:{tableName:"itineraries"},
          key:"id"
        }
      },
      id_place: {
        type: DataTypes.UUID,
        allowNull:false,
        references:{
          model:{
            tableName:'places'
          },
          key:"id"
        }
      },
      date_place: {
        type: DataTypes.DATE,
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
  async down(queryInterface,_Sequelize) {
    await queryInterface.dropTable('itineryplaces');
  }
};