"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FavoritePlace extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Place }) {
      // define association here
      this.belongsTo(Place, { foreignKey: "id_place", as: "place" });
    }
  }
  FavoritePlace.init(
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
      tableName: "favoriteplaces",
      modelName: "FavoritePlace",
    }
  );
  return FavoritePlace;
};
