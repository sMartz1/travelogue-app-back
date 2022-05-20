const PlaceManager = require("../../managers/PlaceManager");

async function getPlaceById(req, res) {
    console.log(req.params.id)
  res.status(200).json(await PlaceManager.getPlaceById(req.params.id));
}

module.exports = getPlaceById;
