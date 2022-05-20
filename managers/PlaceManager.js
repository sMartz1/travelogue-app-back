
const imgSchema = require('../schemas/Img')
const { Place, Itinerary, FavoritePlace , ItineraryPlace} = require("../models");

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

/**
 * We collect all the elements, we generate a random number and use for
 * return the next elements
 * 
 * @returns arr
 */
const getRandoms = async (type) => {
  const randomObjects = [];
  const numberOfRandoms = 12;
  let database = ''

  try {
    if (type == 'itineraries') {
      const allObjectsQuery = await Itinerary.findAll()
      database = allObjectsQuery.map(e => e.dataValues)
    } else if (type == 'places') {
      const allObjectsQuery = await Place.findAll()
      database = allObjectsQuery.map(e => e.dataValues)
    } else {
      return []
    }
    
    const numMax = Math.floor(Math.random() * (database.length - numberOfRandoms))
    for (let i = 0; i < numberOfRandoms; i++) {
      randomObjects.push(database[numMax + i])
    }
    
    return randomObjects
    
  } catch (error) {
    console.error(error)
    return []
  }
  
}

const createPlace = async (body) => {
  const { name, location, price, id_user, path_image } = body
  const newPlace = await Place.create({
    name,
    price,
    location,
    id_user,
  })
  try {
    const newImgSchema = new imgSchema({
      idRel: newPlace.id,
      pathImage: path_image,
      type: 'place'
    })
    await newImgSchema.save()
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  getAllByUser,
  getRandoms,
  createPlace,
  addItineraryPlaces,
  deletePlace,
  getItineraryPlaces,
  deletePlaces
};

