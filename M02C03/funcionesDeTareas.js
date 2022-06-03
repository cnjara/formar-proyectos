//Cristian Jara - Comision 15 - 2022

const fs = require( 'fs' );

module.exports = {

	leer	:	( archivo ) => { 

		let arrayTemporal = JSON.parse( fs.readFileSync( archivo, 'utf-8' ) );

		console.log( 'Listado de tareas\r\n-----------------' );

		for ( let i = 0; i < arrayTemporal.length; i++ ) {
			console.log( `${i + 1}. ${arrayTemporal[i].titulo} - ${arrayTemporal[i].estado}` );
		}

	},

};
