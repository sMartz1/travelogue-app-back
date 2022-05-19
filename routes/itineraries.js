const router = require("express").Router();

router.get('/all/:userId',require('../controllers/itineraries/getAllByUserId'))
router.get('/itinerary/:id',require('../controllers/itineraries/getItineraryById'))
router.post('/newitinerary',require('../controllers/itineraries/postNewItinerary'))
router.put('/modifyitinerary',require('../controllers/itineraries/modifyItinerary'))
router.delete('/deleteitinerary',require('../controllers/itineraries/deleteItinerary'))

module.exports = router;