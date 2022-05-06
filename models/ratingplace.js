"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RatingPlace extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Place }) {
      this.belongsTo(Place, {
        foreignKey: "id_place",
        as: "place",
      });
    }
  }
  RatingPlace.init(
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
      value: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      tableName: "ratingplaces",
      modelName: "RatingPlace",
    }
  );
  return RatingPlace;
};
