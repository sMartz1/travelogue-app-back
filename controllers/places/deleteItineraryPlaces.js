const PlaceManager = require("../../managers/PlaceManager");

async function delteIPlaces(req, res) {
  res.status(200).json(await PlaceManager.deletePlaces(req.body));
}

module.exports = delteIPlaces;