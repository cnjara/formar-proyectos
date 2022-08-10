const ruta = require('path');

const mainController = {
	home: (req, res) => {
		res.sendFile(ruta.join(__dirname, '../views', 'home.html'));
	},
	about: (req, res) => {
		res.sendFile(ruta.join(__dirname, '../views', 'about.html'));
	}
};

module.exports = mainController;