const ItineraryManager = require("../../managers/ItineraryManager");

async function changeItinerary(req, res) {
  res.status(200).json(await ItineraryManager.modifyItinerary(req.body));
}

module.exports = changeItinerary;