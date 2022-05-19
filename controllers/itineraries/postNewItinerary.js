const ItineraryManager = require("../../managers/ItineraryManager");

async function postNewItinerary(req, res) {
  res.status(200).json(await ItineraryManager.createItinerary(req.body));
}

module.exports = postNewItinerary;