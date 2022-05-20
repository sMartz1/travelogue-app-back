"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Itinerary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ ItineraryPlace, FavoriteItinerary }) {
      this.hasMany(ItineraryPlace, { foreignKey: "id_itinerary", as: "steps" });
      this.hasMany(FavoriteItinerary, {
        foreignKey: "id_itinerary",
        as: "favorites",
      });
    }
  }
  Itinerary.init(
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
      description:{
        type: DataTypes.STRING,
        allowNull:true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      start_location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      end_location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      tableName: "itineraries",
      modelName: "Itinerary",
    }
  );
  return Itinerary;
};
