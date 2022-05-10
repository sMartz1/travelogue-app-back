const ItineraryManager = require("../../managers/ItineraryManager");

async function getAllByUserId(req, res) {
  res.status(200).json(await ItineraryManager.getAllByUser(req.params.userId));
}

module.exports = getAllByUserId;
