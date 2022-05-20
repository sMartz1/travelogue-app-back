const PlaceManager = require('../../managers/PlaceManager')

async function getRandoms(req, res){
    console.log(req.params.type)
    const response = await PlaceManager.getRandoms(req.params.type);
    res.status(200).json(response.length > 0 ? response : [])
}

module.exports = getRandoms