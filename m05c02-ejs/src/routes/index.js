var express = require('express');
var router = express.Router();
generalController = require('../controllers/generalController');

router.get('/', generalController.index);
router.get('/about', generalController.about);
router.get('/menu', generalController.menu);

module.exports = router;
