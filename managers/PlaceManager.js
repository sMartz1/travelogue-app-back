const { Place , FavoritePlace  } = require('../models');

const getAllByUser = async (id_user) =>{
    let tempArray = [];
    const placeOwned = await Place.findAll({where: {id_user}});
    const favoritePlace = await FavoritePlace.findAll({where: {id_user} });

    placeOwned.forEach(placeO=>tempArray.push(placeO.dataValues));
    favoritePlace.forEach(favoriteP=>tempArray.push(favoriteP.dataValues));

    return tempArray;
}

module.exports = {
    getAllByUser: getAllByUser
}