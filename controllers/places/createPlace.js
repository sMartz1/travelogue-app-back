const PlaceManager = require('../../managers/PlaceManager')

async function createPlace(req,res) {
    const data = await PlaceManager.createPlace(req.body)
    res.status(200).json(data)
}

module.exports = createPlace;