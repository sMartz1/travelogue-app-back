const router = require("express").Router();

router.get('/all/:userId',require('../controllers/places/getAllByUserId'))
router.post('/createPlace' , require('../controllers/places/createPlace'))

module.exports = router;