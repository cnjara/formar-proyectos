//Cristian Jara - Comision 15 - 2022
//Revision 1

const process = require('process');

let operaciones = {
	sumar		:	( a, b ) => a + b,
	restar		:	( a, b ) => a - b,
	multiplicar	:	( a, b ) => a * b,
	dividir		:	( a, b ) => b === 0 ? 'No se puede dividir por cero.' : a / b
};

let c = ( x ) => console.log( x );

if ( process.argv[2] === undefined ) {

	c( 'Resultado de sumar: ' + operaciones.sumar( 354, 132 ) );
	c( 'Resultado de restar: ' + operaciones.restar( 129, 764 ) );
	c( 'Resultado de multiplicar: ' + operaciones.multiplicar( 753, 34 ) );
	c( 'Resultado de multiplicar: ' + operaciones.multiplicar( 0, 34 ) );
	c( 'Resultado de dividir: ' + operaciones.dividir( 150, 25 ) );
	c( 'Resultado de dividir: ' + operaciones.dividir( 485, 0 ) );

} else {

	let listaOperadores = [ 'sumar', '+', 'restar', '-', 'multiplicar', '*', 'dividir', '/' ];

	let operador = process.argv[2].toLowerCase();
	let a = parseInt( process.argv[3] );
	let b = parseInt( process.argv[4] );

	if ( [ a, b ].some( isNaN ) ) {

		c('Los valores no pueden estar vacíos.');

	} else {

		if ( listaOperadores.includes( operador ) ) {

			switch( operador ) {
				case listaOperadores[0]:
				case listaOperadores[1]:
					c( 'Resultado de sumar: ' + operaciones.sumar( a, b ) );
					break;
				case listaOperadores[2]:
				case listaOperadores[3]:
					c( 'Resultado de restar: ' + operaciones.restar( a, b ) );
					break;
				case listaOperadores[4]:
				case listaOperadores[5]:
					c( 'Resultado de multiplicar: ' + operaciones.multiplicar( a, b ) );
					break;
				case listaOperadores[6]:
				case listaOperadores[7]:
					c( 'Resultado de dividir: ' + operaciones.dividir( a, b ) );
					break;
				default:
					c( 'Ups!' );
			};

		} else { c('Operador no permitido.'); };

	};

};