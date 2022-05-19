const router = require("express").Router();

router.get('/all/:userId',require('../controllers/places/getAllByUserId'))
router.get('/places/:itineraryId',require('../controllers/places/getItineraryPlaces'))
router.post('/itineraryplaces',require('../controllers/places/postItineraryPlaces'))
router.post('/newplace',require('../controllers/places/postPlace'))
router.delete('/deleteplace',require('../controllers/places/deletePlace'))
router.delete('/deleteitineraryplaces',require('../controllers/places/deleteItineraryPlaces'))

module.exports = router;