const ItineraryPlace = require("../../managers/PlaceManager");

async function getItineraryPoints(req, res) {
  res.status(200).json(await ItineraryPlace.getItineraryPlaces(req.params.itineraryId));
}

module.exports = getItineraryPoints;