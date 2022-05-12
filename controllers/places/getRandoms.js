const PlaceManager = require('../../managers/PlaceManager')

async function getRandoms(req, res){

    const response = await PlaceManager.getRandoms();

    res.status(200).json(response.length > 0 ? response : [])
}

module.exports = getRandoms