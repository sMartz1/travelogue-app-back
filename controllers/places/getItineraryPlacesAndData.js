const ItineraryPlace = require("../../managers/PlaceManager");

async function getItineraryInter(req, res) {
  res.status(200).json(await ItineraryPlace.getItineraryPlacesAndData(req.params.itineraryId));
}

module.exports = getItineraryInter;