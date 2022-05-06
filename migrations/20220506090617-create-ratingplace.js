"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("ratingplaces", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      id_user: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      id_place: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "places",
          },
          key: "id",
        },
      },
      value: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable("ratingplaces");
  },
};
