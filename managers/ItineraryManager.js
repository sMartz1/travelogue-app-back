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

module.exports = {
  getAllByUser: getAllByUser,
};
