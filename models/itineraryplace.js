'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItineraryPlace extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Place,Itinerary}) {
      this.belongsTo(Itinerary,{foreignKey:'id_itinerary',as:"itinerary"});
      this.belongsTo(Place,{foreignKey:'id_place',as:"place"});
    }
  }
  ItineraryPlace.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      defaultValue:DataTypes.UUIDV4,
    },
    date_place: {
      type: DataTypes.DATE,
      allowNull:false
    }
  }, {
    sequelize,
    tableName:"itineraryplaces",
    modelName: 'ItineraryPlace',
  });
  return ItineraryPlace;
};