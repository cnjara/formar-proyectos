//Cristian Jara - Comision 15 - 2022

const { readFileSync } = require( 'fs' );

module.exports = {

	listarTareas:	( archivo ) => { 

		let listadoDeTareas = JSON.parse( readFileSync( archivo, 'utf-8' ) );

		console.log( 'Listado de tareas\r\n-----------------' );

		for ( let i = 0; i < listadoDeTareas.length; i++ ) {
			console.log( `${i + 1}. ${listadoDeTareas[i].titulo} - ${listadoDeTareas[i].estado}` );
		}

	},

};
