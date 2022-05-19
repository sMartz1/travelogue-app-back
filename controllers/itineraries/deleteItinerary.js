const ItineraryManager = require("../../managers/ItineraryManager");

async function delteOneItinerary(req, res) {
  res.status(200).json(await ItineraryManager.deleteItinerary(req.body));
}

module.exports = delteOneItinerary;