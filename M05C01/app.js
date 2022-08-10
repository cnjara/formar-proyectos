const {log} = require('console');

const express = require('express');
const app = express();
const routerMain = require('./routers/main');
const puerto = 3000;

app.use( express.static( 'public' ));
app.use('/', routerMain);

app.listen( puerto, () => {
	log( `Servidor corriendo en el puerto http://localhost:${puerto}` )
});