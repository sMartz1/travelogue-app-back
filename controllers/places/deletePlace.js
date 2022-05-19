const PlaceManager = require("../../managers/ItineraryManager");

async function delteOnePlace(req, res) {
  res.status(200).json(await PlaceManager.deletePlace(req.body));
}

module.exports = delteOnePlace;