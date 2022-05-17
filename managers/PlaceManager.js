const imgSchema = require('../schemas/Img')
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


    const createPlace = async (body) => {
    const {name,location,price,id_user,path_image} = body
    const newPlace = await Place.create({
        name,
        price,
        location,
        id_user,
    })
    try {
        const newImgSchema = new imgSchema({
            idRel : newPlace.id,
            pathImage : path_image,
            type : 'place'
        })
        await newImgSchema.save()  
    } catch (error) {
        console.error(error)
    }
}



module.exports = {
    getAllByUser,createPlace
}
