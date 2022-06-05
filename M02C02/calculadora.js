//Cristian Jara - Comision 15 - 2022
//Revision 2

const { argv } = require('process');
const { log } = require('console');
const { sumar } = require('./sumar');
const { restar } = require('./restar');
const { multiplicar } = require('./multiplicar');
const { dividir } = require('./dividir');

if ( argv[2] === undefined ) {

	log( sumar( 354, 132 ) );
	log( restar( 129, 764 ) );
	log( multiplicar( 753, 34 ) );
	log( multiplicar( 0, 34 ) );
	log( dividir( 150, 25 ) );
	log( dividir( 485, 0 ) );

} else {

	let listaOperadores = [ 'sumar', '+', 'restar', '-', 'multiplicar', '*', 'dividir', '/' ];

	let operador = argv[2]?.toLowerCase();
	let a = parseInt( argv[3] );
	let b = parseInt( argv[4] );

	if ( [ a, b ].some( isNaN ) ) { 

		log('Los valores no pueden estar vacíos.');

	} else {

		if ( listaOperadores.includes( operador ) ) {
			
			let posicionOperador = ( n1, n2 ) => listaOperadores.slice( n1, n2 ).includes( operador );
			
			posicionOperador( 0, 2 ) ? log( sumar( a, b ) ) : null;
			posicionOperador( 2, 4 ) ? log( restar( a, b ) ) : null;
			posicionOperador( 4, 6 ) ? log( multiplicar( a, b ) ) : null;
			posicionOperador( 6, 8 ) ? log( dividir( a, b ) ) : null;

		} else { log('Operador no permitido.'); };

	};

};