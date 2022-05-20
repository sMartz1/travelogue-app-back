const router = require("express").Router();

router.get('/all/:userId',require('../controllers/places/getAllByUserId'))
router.post('/createPlace' , require('../controllers/places/createPlace'))
router.get('/singlePlace/:id', require('../controllers/places/getPlaceById'))

module.exports = router;