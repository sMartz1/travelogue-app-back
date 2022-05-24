const imgSchema = require('../schemas/Img')
const { Place, Itinerary, FavoritePlace , ItineraryPlace} = require("../models");
/* const { ConfigurationServicePlaceholders } = require('aws-sdk/lib/config_service_placeholders'); */


//Function that retrieves places created and in favorites of an user.
const getAllByUser = async (id_user) => {
  let tempArray = { own: [], favorites: [] };
  const placeOwned = await Place.findAll({ where: { id_user } });
  const favoritePlace = await FavoritePlace.findAll({ where: { id_user } });
  for (const element of placeOwned) {
    const placeImg = await imgSchema.find({idRel : element.dataValues.id})
    const placeWithImg = {...element,...placeImg}
      tempArray['own'].push(placeWithImg)
  }
  favoritePlace.forEach((favoriteP) =>
    tempArray["favorites"].push(favoriteP.dataValues)
  );
  console.log(tempArray);
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

const getItineraryPlacesAndData = async (id) => {
  const placesData = [];
  try {
    let res = await ItineraryPlace.findAll({ where: { id_itinerary: id } });
    let idsArray=[];
    res.map((e)=> idsArray.push(e.dataValues.id_place))
    const allPlaces = await Place.findAll()
    allPlaces.map((e)=> {
      for (let id of idsArray) {
        if (id === e.dataValues.id) {
          placesData.push(e)
        }
      }
    })
    const response = {itineraryPlaces:res, places:placesData}
    return (response);
  }
  catch (err) {console.log(err)}
  
};


//Function that retrieves a single place with his image
const getPlaceById = async (id) => {

    const {dataValues} = await Place.findOne({where : {id}})
    const placeImg = await imgSchema.find({idRel : id})
    const placeWithImg = {...dataValues,...placeImg}
    return placeWithImg
} 

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

//Function that create a place with his correspondent image
const createPlace = async (body) => {
    const {name,location,price,id_user,path_image} = body
    try {
     const newPlace = await Place.create({
        name,
        price,
        location,
        id_user,
    })     
    console.log(newPlace)
    console.log(newPlace.dataValues)
    return newPlace
    }
    catch(err) {console.log(err)}

/*     try {
        const newImgSchema = new imgSchema({
            idRel : newPlace.id,
            pathImage : path_image,
            type : 'place'
        })
        await newImgSchema.save()  
    } catch (error) {
        console.error(error)
    } */
}


const getItineraryPlaces = async (id) => {
  try {
    let res = await ItineraryPlace.findAll({ where: { id_itinerary: id } });
    return res;
  }
  catch (err) {console.log(err)}
  
};

module.exports = {
  getAllByUser,
  getRandoms,
  createPlace,
  addItineraryPlaces,
  deletePlace,
  getItineraryPlaces,
  deletePlaces,
  getItineraryPlacesAndData,
  getPlaceById
};

