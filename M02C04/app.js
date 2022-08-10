//Cristian Jara - Comision 15 - 2022

const { argv } = require( 'process' );
const { listarTareas, guardarTareas, filtrarPorEstado } = require( './tareas' );
const mostrarMensaje = require( './mensajes' );

const ARCHIVO_JSON = './tareas.json';
const ACCION_ARGUMENTO = argv[3]?.toLowerCase();

switch ( argv[2]?.toLowerCase() ) { //Si existe y es distinto de undefined, transforma el valor en minúsculas
	
	case 'listar':
		listarTareas( ARCHIVO_JSON );
		break;

	case 'crear':
		guardarTareas( ARCHIVO_JSON, ACCION_ARGUMENTO );
		break;

	case 'filtrar':
		filtrarPorEstado( ARCHIVO_JSON, ACCION_ARGUMENTO );
		break;

	case undefined:
		mostrarMensaje( 'Atención - Tienes que pasar una acción' );
		break;

	default:
		mostrarMensaje( 'No entiendo qué quieres hacer' );

};