const ItineraryManager = require("../../managers/ItineraryManager");

async function getItinerary(req, res) {
  res.status(200).json(await ItineraryManager.findItineraryById(req.params.id));
}

module.exports = getItinerary;
