const router = require("express").Router();

router.get('/all/:userId',require('../controllers/places/getAllByUserId'))
router.get('/random', require('../controllers/places/getRandoms'))

module.exports = router;