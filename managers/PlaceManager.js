const { Place, FavoritePlace, ItineraryPlace} = require("../models");

//Function that retrieves places created and in favorites of an user.
const getAllByUser = async (id_user) => {
  let tempArray = { own: [], favorites: [] };
  const placeOwned = await Place.findAll({ where: { id_user } });
  const favoritePlace = await FavoritePlace.findAll({ where: { id_user } });
  placeOwned.forEach((placeO) => tempArray["own"].push(placeO.dataValues));
  favoritePlace.forEach((favoriteP) =>
    tempArray["favorites"].push(favoriteP.dataValues)
  );
  return tempArray;
};

const addItineraryPlaces = async (data) => {
  try {
      const newItinerary = await ItineraryPlace.bulkCreate( data );
      return newItinerary;
  }
  catch (err) {console.log(err)}

};
const addPlace = async (data) => {
  try {
      const newPlace = await Place.create( data );
      return newPlace;
  }
  catch (err) {console.log(err)}

};

const deletePlace = async (data) => {

  try {
      const placeDeleted = await Place.destroy( { where : data} );
      return placeDeleted;
  }
  catch (err) {console.log(err)}

};

const deletePlaces = async (data) => {

  try {
      const placeDeleted = await ItineraryPlace.destroy( { where : data} );
      return placeDeleted;
  }
  catch (err) {console.log(err)}

};

const getItineraryPlaces = async (id) => {
  try {
    let res = await ItineraryPlace.findAll({ where: { id_itinerary: id } });
    return res;
  }
  catch (err) {console.log(err)}
  
};

module.exports = {
  getAllByUser,
  addItineraryPlaces,
  addPlace,
  deletePlace,
  getItineraryPlaces,
  deletePlaces
};
