//Cristian Jara - Comision 15 - 2022

const { log } = require( 'console' );
const { readFileSync, writeFileSync } = require( 'fs' );
const { argv } = require('process');
const mostrarMensaje = require( './mensajes' );

module.exports = {

	leerJSON:	archivo => { 

		return JSON.parse( readFileSync( archivo, 'utf-8' ) );

	},

	escribirJSON:	( archivo, tareaAGuardar ) => {
		
		let listadoDeTareas = module.exports.leerJSON( archivo );

		listadoDeTareas.push( { titulo: argv[3], estado: 'pendiente' } );

		writeFileSync( archivo, JSON.stringify( listadoDeTareas, null, 3 ), 'utf-8' );

	},

	listarTareas:	archivo => {

		let listadoDeTareas = module.exports.leerJSON( archivo );

		mostrarMensaje( 'Listado de tareas', 'separador' );

		listadoDeTareas.forEach( ( tareaIndividual, i ) => {

			log( `${i + 1}. ${tareaIndividual.titulo} - ${tareaIndividual.estado}` );

		} );

	},

	guardarTareas:	( archivo, tareaAGuardar ) => {

		if ( tareaAGuardar !== undefined ) {

			module.exports.escribirJSON( archivo, tareaAGuardar );
			mostrarMensaje( 'Tarea guardada con éxito', 0 );

		} else { mostrarMensaje( 'Atención - Tienes que pasar una tarea', 0 ) };

	},

	filtrarPorEstado:	( archivo, estadoAFiltrar ) => {

		let listadoDeTareas = module.exports.leerJSON( archivo );
		
		if ( [ 'terminada', 'en progreso', 'pendiente' ].includes( estadoAFiltrar ) ) {

			log ( listadoDeTareas.filter( tareaIndividual => {

				return tareaIndividual.estado === estadoAFiltrar;

			} ) );

		} else { mostrarMensaje( 'No se puede filtrar por ese estado', 0 ) };

	},

};
