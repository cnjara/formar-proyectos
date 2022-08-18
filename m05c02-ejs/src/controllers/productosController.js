let dataRuta = require('path').join(__dirname, '../data/');
let productosAcciones = require( dataRuta+'productosAcciones.js' );
let productos = productosAcciones.leer( dataRuta+'platos.json' );


const productosController = {
	detalle: (req, res) => {
		let productoId = req.params.id - 1;
		res.render('detalleMenu', { producto: productos[productoId] });
	}
};

module.exports = productosController;