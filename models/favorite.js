"use strict";

const enumTypes = ["place", "itinerary"];
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(_models) {
      // define association here
    }
  }
  favorite.init(
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
      type: {
        allowNull: false,
        type: DataTypes.ENUM(enumTypes),
      },
      id_reference: {
        allowNull: false,
        type: DataTypes.UUID,
      },
    },
    {
      sequelize,
      tableName: "favorites",
      modelName: "Favorite",
    }
  );
  return Favorite;
};
