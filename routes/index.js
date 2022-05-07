const router = require("express").Router();

router.use("/places", require("./places"));
router.use("/itineraries", require("./itineraries"));

module.exports = router;