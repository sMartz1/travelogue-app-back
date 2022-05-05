"use strict";
const enumTypes = ["place", "itinerary"];
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("favorites", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      type: {
        allowNull: false,
        type: DataTypes.ENUM(enumTypes),
      },
      id_user:{
        allowNull:false,
        type:DataTypes.UUID
      },
      id_reference:{
        allowNull:false,
        type:DataTypes.UUID
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
  async down(queryInterface) {
    await queryInterface.dropTable("favorites");
  },
};
