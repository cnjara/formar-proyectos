//Cristian Jara - Comision 15 - 2022
//Revision 1

const process = require('process');

const sumar = require('./sumar');
const restar = require('./restar');
const multiplicar = require('./multiplicar');
const dividir = require('./dividir');

let c = ( x ) => console.log( x );

if ( process.argv[2] === undefined ) {

	c( 'Resultado de sumar: ' + sumar( 354, 132 ) );
	c( 'Resultado de restar: ' + restar( 129, 764 ) );
	c( 'Resultado de multiplicar: ' + multiplicar( 753, 34 ) );
	c( 'Resultado de multiplicar: ' + multiplicar( 0, 34 ) );
	c( 'Resultado de dividir: ' + dividir( 150, 25 ) );
	c( 'Resultado de dividir: ' + dividir( 485, 0 ) );

} else {

	let listaOperadores = [ 'sumar', '+', 'restar', '-', 'multiplicar', '*', 'dividir', '/' ];

	let operador = process.argv[2]?.toLowerCase();
	let a = parseInt( process.argv[3] );
	let b = parseInt( process.argv[4] );

	if ( [ a, b ].some( isNaN ) ) { 

		c('Los valores no pueden estar vacíos.');

	} else {

		if ( listaOperadores.includes( operador ) ) {
			
			let posicionOperador = ( n1, n2 ) => listaOperadores.slice( n1, n2 ).includes( operador );
			
			posicionOperador( 0, 2 ) ? c( 'Resultado de sumar: ' + sumar( a, b ) ) : null;
			posicionOperador( 2, 4 ) ? c( 'Resultado de restar: ' + restar( a, b ) ) : null;
			posicionOperador( 4, 6 ) ? c( 'Resultado de multiplicar: ' + multiplicar( a, b ) ) : null;
			posicionOperador( 6, 8 ) ? c( 'Resultado de dividir: ' + dividir( a, b ) ) : null;

		} else { c('Operador no permitido.'); };

	};

};