const PlaceManager = require("../../managers/PlaceManager");

async function getPlaceById(req, res) {
  res.status(200).json(await PlaceManager.getPlaceById(req.params.placeid));
}

module.exports = getPlaceById;