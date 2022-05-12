const { Place, FavoritePlace } = require("../models");

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

/**
 * We collect all the elements, we generate a random number and use for
 * return the next elements
 * 
 * @returns arr
 */
const getRandoms = async() => {
  const randomPlaces = [];
  const numberOfRandoms = 12;

  try{
    const allPlacesQuery = await Place.findAll()
    const allPlaces = allPlacesQuery.map(e => e.dataValues)
    const numMax = Math.floor(Math.random()*(allPlaces.length-numberOfRandoms))

    for(let i = 0 ; i < numberOfRandoms ; i++){
      randomPlaces.push(allPlaces[numMax+i])
    }

    return randomPlaces

  }catch(error){
    return []
  }
  
}


module.exports = {
  getAllByUser: getAllByUser,
  getRandoms: getRandoms,
};
