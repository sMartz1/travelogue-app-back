const PlaceManager = require("../../managers/PlaceManager");

async function getAllByUserId(req, res) {
  res.status(200).json(await PlaceManager.getAllByUser(req.params.userId));
}

module.exports = getAllByUserId;
