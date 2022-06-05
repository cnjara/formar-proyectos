//Cristian Jara - Comision 15 - 2022
//Revision 2

const { argv } = require('process');
const { log } = require('console');

let operaciones = {
	sumar		:	( a, b ) => `Resultado de sumar: ${a + b}`,
	restar		:	( a, b ) => `Resultado de restar: ${a - b}`,
	multiplicar	:	( a, b ) => `Resultado de multiplicar: ${a * b}`,
	dividir		:	( a, b ) => `Resultado de dividir: ${b === 0 ? 'No se puede dividir por cero.' : a / b}`
};

const { sumar } = operaciones;
const { restar } = operaciones;
const { multiplicar } = operaciones;
const { dividir } = operaciones;

if ( argv[2] === undefined ) {

	log( sumar( 354, 132 ) );
	log( restar( 129, 764 ) );
	log( multiplicar( 753, 34 ) );
	log( multiplicar( 0, 34 ) );
	log( dividir( 150, 25 ) );
	log( dividir( 485, 0 ) );

} else {

	let listaOperadores = [ 'sumar', '+', 'restar', '-', 'multiplicar', '*', 'dividir', '/' ];

	let operador = argv[2].toLowerCase();
	let a = parseInt( argv[3] );
	let b = parseInt( argv[4] );

	if ( [ a, b ].some( isNaN ) ) {

		log('Los valores no pueden estar vacíos.');

	} else {

		if ( listaOperadores.includes( operador ) ) {

			switch( operador ) {
				case listaOperadores[0]:
				case listaOperadores[1]:
					log( sumar( a, b ) );
					break;
				case listaOperadores[2]:
				case listaOperadores[3]:
					log( restar( a, b ) );
					break;
				case listaOperadores[4]:
				case listaOperadores[5]:
					log( multiplicar( a, b ) );
					break;
				case listaOperadores[6]:
				case listaOperadores[7]:
					log( dividir( a, b ) );
					break;
				default:
					log( 'Ups!' );
			};

		} else { log('Operación no permitida.'); };

	};

};