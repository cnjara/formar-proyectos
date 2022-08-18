var express = require('express');
var router = express.Router();
productosController = require('../controllers/productosController');

router.get('/:id', productosController.detalle);

module.exports = router;
