//Cristian Jara - Comision 15 - 2022

const process = require( 'process' );
const procesarArchivo = require( './funcionesDeTareas' );
const mostrarMensaje = require( './mensajes' );

let accion = process.argv[2]?.toLowerCase(); //Si existe y es distinto de undefined, transforma el valor en minúsculas

switch ( accion ) {
	case 'listar':
		procesarArchivo.leer( './tareas.json' );
		break;
	case undefined:
		mostrarMensaje( 'Atención - Tienes que pasar una acción' );
		break;
	default:
		mostrarMensaje( 'No entiendo qué quieres hacer' );
}
