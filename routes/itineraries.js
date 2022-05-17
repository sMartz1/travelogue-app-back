const router = require("express").Router();

router.get('/all/:userId',require('../controllers/itineraries/getAllByUserId'))

module.exports = router;