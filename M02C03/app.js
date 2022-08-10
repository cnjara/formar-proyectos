//Cristian Jara - Comision 15 - 2022

const { argv } = require( 'process' );
const { listarTareas } = require( './funcionesDeTareas' );
const mostrarMensaje = require( './mensajes' );

switch ( argv[2]?.toLowerCase() ) { //Si existe y es distinto de undefined, transforma el valor en minúsculas
	case 'listar':
		listarTareas( './tareas.json' );
		break;
	case undefined:
		mostrarMensaje( 'Atención - Tienes que pasar una acción' );
		break;
	default:
		mostrarMensaje( 'No entiendo qué quieres hacer' );
}
