//Cristian Jara - Comision 15 - 2022

const { argv } = require( 'process' );
const { listarTareas, guardarTareas, filtrarPorEstado } = require( './tareas' );
const mostrarMensaje = require( './mensajes' );

switch ( argv[2]?.toLowerCase() ) { //Si existe y es distinto de undefined, transforma el valor en minúsculas
	
	case 'listar':
		listarTareas( './tareas.json' );
		break;

	case 'crear':
		guardarTareas( './tareas.json', argv[3]?.toLowerCase() );
		break;

	case 'filtrar':
		filtrarPorEstado( './tareas.json', argv[3]?.toLowerCase() );
		break;

	case undefined:
		mostrarMensaje( 'Atención - Tienes que pasar una acción' );
		break;

	default:
		mostrarMensaje( 'No entiendo qué quieres hacer' );

};