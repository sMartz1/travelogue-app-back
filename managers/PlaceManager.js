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

module.exports = {
  getAllByUser: getAllByUser,
};
