let dataRuta = require('path').join(__dirname, '../data/');
let productosAcciones = require( dataRuta+'productosAcciones.js' );
let productos = productosAcciones.leer( dataRuta+'platos.json' );


const generalController = {
	index: (req, res, next) => {
		res.render('index', { productos: productos });
	},
	about: (req, res, next) => {
		res.render('about');
	},
	menu: (req, res, next) => {
		res.render('menu', { productos: productos });
	},
};

module.exports = generalController;