const productosAcciones = {
    leer: (archivo) => {
        const { readFileSync } = require( 'fs' );
        return JSON.parse( readFileSync( archivo, 'utf-8' ) );;
    },
    escribir: () => {}
};

module.exports = productosAcciones;