//Cristian Jara - Comision 15 - 2022

const { log } = require( 'console' );

module.exports = ( mensaje, adicional ) => {
	
	log( mensaje );
	
	switch ( adicional ) {
		
		case undefined:
			log( 'Las acciones disponibles son: listar' );
			break;

		case 'separador':
			log( '-----------------' );
			break;
		
		default:
			//No hago nada
	}

}