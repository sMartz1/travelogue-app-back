const { Itinerary, FavoriteItinerary } = require("../models");

const getAllByUser = async (id_user) => {
  let tempArray = { own: [], favorites: [] };
  const itineraryOwned = await Itinerary.findAll({ where: { id_user } });
  const favoriteItinerary = await FavoriteItinerary.findAll({
    where: { id_user },
  });
  itineraryOwned.forEach((placeO) => tempArray["own"].push(placeO.dataValues));
  favoriteItinerary.forEach((favoriteP) =>
    tempArray["favorites"].push(favoriteP.dataValues)
  );
  return tempArray;
};

const createItinerary = async (data) => {
  try {
      const newItinerary = await Itinerary.create( data );
      return newItinerary;
  }
  catch (err) {console.log(err)}

};

const deleteItinerary = async (data) => {
  try {
      const itineraryDeleted = await Itinerary.destroy( { where : data} );
      return itineraryDeleted;
  }
  catch (err) {console.log(err)}

};

const modifyItinerary = async (data) => {
 
  try {
      const itineraryModify = await Itinerary.update( {name:data.name, start_location:data.start_location, end_location:data.end_location,price:data.price} , { where : {id:data.id}} );
      return itineraryModify;
  }
  catch (err) {console.log(err)}

};

const findItineraryById  =  async (id)=> {
  try {
    const data = await Itinerary.findAll({ where: { id } });
    return data;
  }
  catch (err) {console.log(err)}
}

module.exports = {
  getAllByUser,
  createItinerary,
  deleteItinerary,
  modifyItinerary,
  findItineraryById
};
