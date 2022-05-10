"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FavoriteItinerary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Itinerary }) {
      this.belongsTo(Itinerary, {
        foreignKey: "id_itinerary",
        as: "itinerary",
      });
    }
  }
  FavoriteItinerary.init(
    {
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
    },
    {
      sequelize,
      tableName: "favoriteitineraries",
      modelName: "FavoriteItinerary",
    }
  );
  return FavoriteItinerary;
};
