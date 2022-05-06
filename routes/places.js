const router = require("express").Router();

router.get('/all/:userId',require('../controllers/places/getAllByUserId'))

module.exports = router;