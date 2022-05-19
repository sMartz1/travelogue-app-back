const PlaceManager = require("../../managers/PlaceManager");

async function postNewPlace(req, res) {
  res.status(200).json(await PlaceManager.addItineraryPlaces(req.body));
}

module.exports = postNewPlace;