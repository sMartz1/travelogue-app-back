const router = require("express").Router();

router.use("/places", require("./places"));
router.use("/itineraries", require("./itineraries"));
router.get('/random/:type', require('../controllers/places/getRandoms'))

module.exports = router;