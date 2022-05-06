const PlaceManager = require('../../managers/PlaceManager')

async function getAllByUserId(req, res) {
        const data = await PlaceManager.getAllByUser(req.params.userId);
        
        res.status(200).json(data)
}

module.exports = getAllByUserId;