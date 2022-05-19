const PlaceManager = require("../../managers/PlaceManager");

async function postItineraryPlaces(req, res) {
  res.status(200).json(await PlaceManager.addPlace(req.body));
}

module.exports = postItineraryPlaces;