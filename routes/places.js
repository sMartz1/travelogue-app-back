const router = require("express").Router();

router.get('/all/:userId',require('../controllers/places/getAllByUserId'))
router.get('/places/:itineraryId',require('../controllers/places/getItineraryPlaces'))
router.get('/itineraryplaces/:itineraryId',require('../controllers/places/getItineraryPlacesAndData'))
router.post('/itineraryplaces',require('../controllers/places/postItineraryPlaces'))
router.delete('/deleteplace',require('../controllers/places/deletePlace'))
router.delete('/deleteitineraryplaces',require('../controllers/places/deleteItineraryPlaces'))
router.post('/createPlace' , require('../controllers/places/createPlace'))

module.exports = router;